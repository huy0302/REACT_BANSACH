const mongoose = require("mongoose");
require("dotenv").config();
async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://huynguyen03022003:huynguyen03022003@cluster0.6pflfjy.mongodb.net/`,
      // "mongodb://127.0.0.1:27017/book-shop",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("success");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}

module.exports = { connect };
