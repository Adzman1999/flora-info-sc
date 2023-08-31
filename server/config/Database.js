const mongoose = require("mongoose");
const RoleUser = require("../auto/RoleUser");

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log(
          `mongodb is connected with server: ${data.connection.host}`
        );
        RoleUser();
      });
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
