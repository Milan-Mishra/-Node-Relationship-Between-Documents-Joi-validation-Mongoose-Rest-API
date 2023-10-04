const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");
  const myquery = { address: /^S/ };
  const newvalues = { $set: { name: "Minnie" } };

  dbo
    .collection("customers")
    .updateMany(myquery, newvalues, function (err, res) {
      if (err) {
        throw err;
      }
      console.log(res.result.nModified + " document(s) updated");
      db.close();
    });
});
