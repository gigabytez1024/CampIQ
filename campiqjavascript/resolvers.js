const dbRtns = require("./dbroutines");
const { campgrounds } = require("./config");
const resolvers = {
  campgrounds: async () => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, campgrounds, {}, {});
  },
  campgroundbyname: async (args) => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findOne(db, campgrounds, { name: args.name });
  },
};

module.exports = { resolvers };
