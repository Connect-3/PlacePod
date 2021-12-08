const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

require('../db/conn');
const Student = require('../models/Student');
const Admin = require('../models/Admin');

router.post('/register', async (req, res) => {
  const { enrollment, email, password } = req.body;
  try {
    if (!enrollment || !email || !password) {
      return res.status(422).json({ error: 'Fill all the fields' });
    }
    const studentExist = await Student.findOne({ enrollment: enrollment });

    if (studentExist) {
      return res.status(422).json({ error: 'Account Already Exist' });
    }

    const student = new Student({ enrollment, email, password });
    await student.save();
    res.status(201).json({ message: 'user registration complete' });
  } catch {
    () => {
      res.status(422).json('Account Already exist');
    };
  }
});

router.post('/login', async (req, res) => {
  try {
    const { enrollment, password } = req.body;
    if (!enrollment || !password)
      return res.status(422).json({ error: 'Fill all the fields' });
    const studentLogin = await Student.findOne({ enrollment: enrollment });

    if (studentLogin) {
      const isMatch = await bcrypt.compare(password, studentLogin.password);

      const token = await studentLogin.generateAuthToken();
      res.cookie('jwttoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: 'Invalid Credentials' });
      } else {
        res.status(200).json({ message: 'user login successfully' });
      }
    } else {
      res.status(400).json({ error: 'Invalid Credentials' });
    }
  } catch {
    (err) => res.status(400).json({ error: 'Invalid credential' });
  }
});

router.post('/adminlogin', async (req, res) => {
  try {
    const { adminNumber, password } = req.body;
    if (!adminNumber || !password)
      return res.status(422).json({ error: 'Fill all the fields' });
    console.log(adminNumber, password);
    const adminLogin = await Admin.findOne({ adminNumber: adminNumber });
    if (adminLogin) {
      const isMatch = await bcrypt.compare(password, adminLogin.password);
      console.log(isMatch);
      const token = await adminLogin.generateAuthToken();
      res.cookie('jwttoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: 'Invalid Credentials' });
      } else {
        res.status(200).json({ message: 'user login successfully' });
      }
    } else {
      res.status(400).json({ error: 'Invalid Credentials' });
    }
  } catch (err) {
    (err) => res.status(400).json({ error: 'Invalid credential' });
  }
});

router.get('/feed', authenticate, (req, res) => {
  res.status(200).send(req.rootStudent);
});

router.get('/logout', (req, res) => {
  res.clearCookie('jwttoken', { path: '/' });
  res.status(200).send('user logout');
});

module.exports = router;
