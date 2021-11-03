const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Query {
 campgrounds: [Campground],
 campgroundbyname(campsitename: String): Campground
}
type Campground {
 campsitename: String
 address: String
 city: String
 province: String
 latitude: String
 longitude: String
 unservicedfee: String
 servicedfee: String
 servicedsewerfee: String
 equipmentrental: String
 firewood: String
 dumpstation: String
 additionalvehicle: String
 googlerating: String
}
`);
module.exports = { schema };
