const controllers = require("../controllers/controllers");
const middlewares = require("../middlewares/middlewares");

const routes = (app) => {
  app.post("/api", middlewares.isUnique, controllers.addPreference);
  app.get("/test", (req, res) => {
    res.json({ status: "testing server" });
  });
};

module.exports.routes = routes;
