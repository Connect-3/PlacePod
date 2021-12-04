const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const StudentSchema = new mongoose.Schema({
  enrollment: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  firstName: {
    type: String,
    required: false,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  branch: {
    type: String,
    required: false,
  },
  graduationYear: {
    type: String,
    required: false,
  },
  cg: {
    type: Number,
    required: false,
  },
  linkedIn: {
    type: String,
    required: false,
  },
  github: {
    type: String,
    required: false,
  },
  codeforces: {
    type: String,
    required: false,
  },
  codechef: {
    type: String,
    required: false,
  },
  atcoder: {
    type: String,
    required: false,
  },
  resume: {
    type: String,
  },
  opportunities: {
    type: Array,
    requied: false,
  },
  placed: {
    type: Number, // enum 0 -> mass 1-> normal 2-> dream
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

StudentSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

StudentSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    const res = await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = Student = mongoose.model('student', StudentSchema);
