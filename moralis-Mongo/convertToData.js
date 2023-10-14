const ethers = require("ethers");

const fun = async () => {
  console.log(
    await ethers.toUtf8String(
      "cc53088468ba1d3557776bb87721fe3286bfc3d6f691b04339a9285bf802bf67"
    )
    // .toUtf8String(
    //   "0xcc53088468ba1d3557776bb87721fe3286bfc3d6f691b04339a9285bf802bf67"
    // )
    // .toString()
  );
};

fun();
