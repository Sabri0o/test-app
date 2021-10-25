const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./model/database");
require("dotenv").config();
const { routes } = require("./routes/routes");

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// allow one origin to serve and block the rest
const corsOption = {
  origin: "http://localhost:3000",
};

// cors middleware
app.use(cors(corsOption));

// console.log(db)
sequelize
  .sync()
  .then(() => {
    console.log("Database connected !");
  })
  .catch(() => {
    console.log("error while connecting to db");
  });

routes(app);

app.listen(3001, () => {
  console.log("listen on port 3001");
});
