const express = require('express');
const router = express.Router();

require('../db/conn');
const Student = require('../models/Student');

router.post('/updateProfile', async (req, res) => {
  const {
    enrollment,
    email,
    firstName,
    middleName,
    lastName,
    phone,
    gender,
    branch,
    graduationYear,
    cg,
    linkedin,
    github,
    codeforces,
    codechef,
    atcoder,
    resume,
  } = req.body;

  try {
    if (
      !enrollment ||
      !email ||
      !firstName ||
      !gender ||
      !lastName ||
      !branch ||
      !graduationYear ||
      !cg ||
      !resume ||
      !phone
    ) {
      return res.status(422).json({ error: 'Fill all the fields' });
    }

    const profileExist = await Student.findOne({ enrollment: enrollment });

    if (!profileExist) {
      return res.status(422).json({ error: "Profile Doesn't exist" });
    }

    const profile = new Student({
      enrollment,
      email,
      firstName,
      middleName,
      lastName,
      phone,
      gender,
      branch,
      graduationYear,
      cg,
      linkedin,
      github,
      codechef,
      codeforces,
      atcoder,
      resume,
    });

    await profile.save();
    res.status(201).json({ message: 'profile updated' });
  } catch (err) {
    console.log(err);
  }
});

router.get('/retrieveProfile', async (req, res) => {
  try {
    const { enrollment } = req.body;
    let profile = await Student.findOne({ enrollment: enrollment });
    if (profile) {
      res.send(profile);
    } else {
      res.status(400).json({ message: 'error' });
    }
  } catch (err) {
    (err) => console.log(err);
  }
});

module.exports = router;
