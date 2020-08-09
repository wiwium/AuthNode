const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

const db = require("../db/connection");

const users = db.get("users");
// console.log(users);

async function createAdminUser() {
  try {
    const user = await users.findOne({ role: "admin" });
    console.log("user: ", user);
    if (!user) {
      console.log("inserting user");
      users.insert({
        username: process.env.ADMIN_USERNAME,
        password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
        active: true,
        role: "admin",
      });
      console.log("user inserted");
    }
    console.log("done");
    // console.log(await users.find({}));
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
}

console.log("i was here");
createAdminUser().then(() => {
  console.log("done");
});
