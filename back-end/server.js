const express = require("express");
const app = express();
const { sequelize } = require("./model/database");
const { routes } = require("./routes/routes");

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

sequelize
  .sync()
  .then(() => {
    console.log("Database connected !");
  })
  .catch(() => {
    console.log("error while connecting to db");
  });

routes(app);

app.listen(5000, () => {
  console.log("listen on port 5000");
});
