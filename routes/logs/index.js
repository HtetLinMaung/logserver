const Log = require("../../models/Log");
const isJson = require("../../utils/is-json");

module.exports = async (req, res) => {
  try {
    const method = req.method.toLowerCase();
    if (method == "post") {
      const log = Log(req.body);
      await log.save();
      res.status(201).json({
        code: 201,
        message: "Log created successful.",
        data: log,
      });
    } else if (method == "get") {
      const page = parseInt(req.query.page);
      const perpage = parseInt(req.query.perpage);
      const skip = (page - 1) * perpage;

      const filter = {};
      let sort = { createdAt: -1 };
      for (const [k, v] of Object.entries(req.query)) {
        if (k == "search" && v) {
          filter["$text"] = { $search: v };
        } else if (k == "sort") {
          sort = isJson(v) ? JSON.parse(v) : sort;
        } else if (!["page", "perpage", "createdAt", "updatedAt"].includes(k)) {
          filter[k] = isJson(v) ? JSON.parse(v) : v;
        }
      }

      const logs = await Log.find(filter).sort(sort).skip(skip).limit(perpage);
      const total = await Log.countDocuments(filter);

      res.json({
        code: 200,
        message: "Logs fetched successful.",
        data: logs,
        page,
        perpage,
        total,
        pagecount: Math.ceil(total / perpage),
      });
    } else {
      res.status(404).json({
        code: 404,
        message: "Url not found!",
      });
    }
  } catch (err) {
    res.status(500).json({
      code: 500,
      message: err.message,
      stack: err.stack,
    });
  }
};
