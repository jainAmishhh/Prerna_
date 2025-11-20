import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },

    phonenumber: {
      type: String,
      unique: true,
      sparse: true,
    },

    password: {
      type: String,
      unique: true,
      trim: true,
    },

    address: {
        type: String,
        trim: true,
    },

    interest: {
        type: String,
        trim: true,
    },

    age: {
        type: String,
        trim: true,
    }, 

    language: {
        type: String,
        trim: true,
    },
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
