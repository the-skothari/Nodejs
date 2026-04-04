require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URI;

const client = new MongoClient(url);
const dbname = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully.");
  const db = client.db(dbname);
  const collection = db.collection("User");

  //Read.
  const findResult = await collection.find({}).toArray();
  console.log("Found Documents =>", findResult);

  //insert.
  const data = {
    firstName: "Saksham",
    lastName: "Kothari",
    location: "Dehradun",
  };

  const insertResult = await collection.insertMany([data]);
  console.log("inserted document =>", insertResult);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
