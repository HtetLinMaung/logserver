const mongoose = require("mongoose");

exports.beforeServerStart = async () => {
  await mongoose.connect(process.env.connection_string);
  console.log("Mongo db connected");
};
