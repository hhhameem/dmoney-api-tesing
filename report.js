const newman = require("newman");

newman.run(
  {
    collection: require("./collection/dmoney_transaction_postman_collection.json"),
    // environment: require(""),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./reports/reports.html",
        title: "Domeny API Testing",
      },
    },
  },
  function (err) {
    if (err) throw err;
    console.log("Collection run completed");
  }
);
