const express = require("express");
const app = express();
const port = 3131;
const cors = require("cors");
const { connectDB } = require("./utils/ConnectToDB");
const { contacts } = require("./utils/TransferSchema");
const ethers = require("ethers");

app.use(cors());
app.use(express.json());

app.post("/webhook", async (req, res) => {
  const { body } = req;
  if (body.confirmed) {
    return res.status(200).json();
  }

  await connectDB();

  let newContacts = [];

  for (evnt of body.logs) {
    console.log(await ethers.utils.parseBytes32String(evnt.topic0));
    newContacts.push({
      name: evnt.topic0,
      userAddress: evnt.topic1,
      email: evnt.topic2,
      mobileNumber: evnt.topic3,
    });
  }

  if (newContacts.length > 0) {
    await contacts.insertMany(newContacts);
    console.log("new Contacts added to db");
  }
});

app.listen(port, () => {
  console.log("Listening to streams");
});
