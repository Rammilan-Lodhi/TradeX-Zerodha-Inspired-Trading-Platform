const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    otpHash: {
      type: String,
      default: null,
    },
    otpExpiresAt: {
      type: Date,
      default: null,
    },
    otpPurpose: {
      type: String,
      enum: ['signup', 'login', null],
      default: null,
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.model('User', userSchema);

module.exports = { UserModel };
