const mongoose = require("mongoose");

exports.beforeServerStart = async () => {
  await mongoose.connect(process.env.connection_string);
  console.log("Mongo db connected");
  // const res = await sendSms("09404888722", "test message", "Tester");
  // console.log(res.data);
  // const res2 = await sendEmail(
  //   "jsthtet96@gmail.com",
  //   "subject",
  //   "test message",
  //   "tester"
  // );
  // console.log(res2.data);
};
