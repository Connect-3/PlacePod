const express = require('express');
const router = express.Router();

require('../db/conn');
const Opportunity = require('../models/Opportunity');

router.get('/retrieveOppList', async (req, res) => {
  const { enrollment } = req.body;

  if (!enrollment) res.status(422).json({ error: 'error' });

  let opps = Opportunity.find({});

  let appliedOps = []



  let student = await Student.findOne({ enrollment: enrollment });
  let opp = await Opportunity.findOne({ _id: opportunityId });

  opp.students.push(student.enrollment);
  student.opportunities.push(opp._id);

  await student.save();
  await opp.save();

  res.status(201).json({ message: 'opportunity added' });
});

module.exports = router;
