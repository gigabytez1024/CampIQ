// const { campgrounds } = require("./config");
// const express = require("express");
// const router = express.Router();
// const dbRtns = require("./dbroutines");
// const MongoClient = require("mongodb");

// // Campground-GET: define a default route to retrieve all campground info
// router.get("/campgrounds", async (req, res) => {
//   try {
//     let db = await dbRtns.getDBInstance();
//     let campgroundInfo = await dbRtns.findAll(db, campgrounds);
//     res.status(200).send({ campgrounds: campgroundInfo });
//   } catch (err) {
//     console.log(err.stack);
//     res.status(500).send("get campground info failed - internal server error");
//   }
// });

// module.exports = router;
