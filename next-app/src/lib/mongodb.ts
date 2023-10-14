//@ts-ignore
import mongoDB from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose, { Connection } from "mongoose";

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbURI = process.env.MONGO_URL || ""; // Replace with your MongoDB URI

const db: Connection = mongoose.createConnection(dbURI, connectionOptions);

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default db;
