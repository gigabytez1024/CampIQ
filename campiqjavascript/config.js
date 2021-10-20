const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  atlas: process.env.DBURL,
  appdb: process.env.DB,
  campgrounds: process.env.CAMPGROUNDSCOLLECTION,
  port: process.env.PORT,
};
