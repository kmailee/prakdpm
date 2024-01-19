const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
      {
            nama: String,
            email: { type: String, unique: true },
            npm: String,
            password: String
      },
      {
            collection: "Users"
      }
);

mongoose.model("Users", UserSchema);


