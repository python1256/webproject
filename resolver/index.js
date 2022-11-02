// get the defined function(s)
const { getShortLivedAccessToken } = require("./instagram");

// general query object
const Query = {
  Query: {
    getShortLivedAccessToken: () => getShortLivedAccessToken(),
  },
};

// export the Query object
module.exports = Query;