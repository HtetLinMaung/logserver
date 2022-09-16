const Log = require("../../../models/Log");

module.exports = async (req, res) => {
  try {
    const method = req.method.toLowerCase();
    if (method != "get") {
      return res.status(404).json({
        code: 404,
        message: "Url not found!",
      });
    }
    const log = await Log.findById(req.params.id);
    if (!log) {
      return res.status(404).json({
        code: 404,
        message: "Log not found!",
      });
    }
    res.json({
      code: 200,
      message: "Log fetched successful",
      data: log,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      message: err.message,
      stack: err.stack,
    });
  }
};
