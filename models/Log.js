const { Schema, model } = require("mongoose");

const logSchema = new Schema(
  {
    appid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      default: "info",
      enum: ["info", "error", "warning"],
    },
    code: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    stack: {
      type: String,
      default: "",
    },
    destination: {
      type: String,
      default: "",
    },
    useragent: {
      type: String,
      default: "",
    },
    method: {
      type: String,
      default: "",
    },
    userid: {
      type: String,
      default: "",
    },
    data: {
      type: Schema.Types.Mixed,
      default: null,
    },
  },
  { timestamps: true }
);

logSchema.index({ "$**": "text" });

module.exports = model("Log", logSchema);
