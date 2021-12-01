const dbRtns = require("./dbroutines");
const { campgrounds } = require("./config");
const resolvers = {
  campgrounds: async () => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, campgrounds, {}, {});
  },
  campgroundbyname: async (args) => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findOne(db, campgrounds, { campsitename: args.campsitename });
  },
  updateRating: async (args) => {
    let db = await dbRtns.getDBInstance();
    let updateResults = await dbRtns.updateOne(db, campgrounds, { campsitename: args.campsitename }, { userrating: args.rating });
    console.log(updateResults);
    if (updateResults.lastErrorObject.updatedExisting) {
      return updateResults.value;
    } else {
      return null;
    }
  },
};

module.exports = { resolvers };
