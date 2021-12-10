const express = require('express');
const router = express.Router();

require('../db/conn');
const Student = require('../models/Student');

router.post('/updateProfile', async (req, res) => {
  try {
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
      resume,
    } = req.body;
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
    
    profileExist.firstName = firstName;
    profileExist.middleName = middleName;
    profileExist.lastName = lastName;
    profileExist.email = email;
    profileExist.enrollment = enrollment;
    profileExist.phone = phone;
    profileExist.gender = gender;
    profileExist.branch = branch;
    profileExist.graduationYear = graduationYear;
    profileExist.cg = cg;
    profileExist.linkedin = linkedin;
    profileExist.github = github;
    profileExist.codeforces = codeforces;
    profileExist.codechef = codechef;
    profileExist.resume = resume;
    
    await profileExist.save();
    res.status(201).json({ message: 'profile updated' });
  } catch (err) {
    console.log(err.res);
  }
});

router.get('/retrieveProfile', async (req, res) => {
  try {
    const { enrollment } = req.query;
    let profile = await Student.findOne({ enrollment: enrollment });
    if (profile) {
      res.status(200).send(profile);
    } else {
      res.status(400).json({ message: 'error' });
    }
  } catch (err) {
    (err) => console.log(err);
  }
});

module.exports = router;
