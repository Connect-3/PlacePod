const express = require('express');
const router = express.Router();

require('../db/conn');
const Student = require('../models/Student');

router.get('/retrievecg', async (req, res) => {
  try {
    const { enrollment } = req.query;
    const student = await Student.findOne({ enrollment: enrollment });

    if (student) res.status(200).send(student.cg);
    else res.status(404);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
