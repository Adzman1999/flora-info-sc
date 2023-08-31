const User = require("../models/UserModel");

const RoleUser = () => {
  User.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new User({
        username: "admin",
        password: "admin",
      }).save();
    }
  });
};

module.exports = RoleUser;
