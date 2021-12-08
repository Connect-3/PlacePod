const express = require('express');
const router = express.Router();

require('../db/conn');
const Opportunity = require('../models/Opportunity');
const Student = require('../models/Student');

router.post('/opportunityApply', async (req, res) => {
  const { enrollment, opportunityId } = req.body;
  if (!enrollment || !opportunityId) res.status(422).json({ error: 'error' });

  let student = await Student.findOne({ enrollment: enrollment });
  let opp = await Opportunity.findOne({ _id: opportunityId });

  opp.students.push(student.enrollment);
  student.opportunities.push(opp._id);

  await student.save();
  await opp.save();

  res.status(201).json({ message: 'opportunity added' });
});

router.get('/opportunitiesretrieve', async (req, res) => {
  const { enrollment, cg } = req.body;

  var today = new Date();
  const date = today.toISOString().substring(0, 10);

  if (!enrollment || !cg)
    res.status(422).json({ error: 'Fill all the fields' });

  const student = await Student.findOne({ enrollment: enrollment });
  const opportunityIdArray = student.opportunities;

  const opportunityArray = await Opportunity.find({
    _id: { $in: opportunityIdArray },
  });
  let categoryMx = 0;
  for (let i = 0; i < opportunityArray.length; i++) {
    if (opportunityArray[i].stage === 3)
      categoryMx = Math.max(categoryMx, opportunityArray[i].category);
  }

  const opportunityIds = student.opportunities;
  const filter = {
    stage: { $eq: 0 },
    min_cg: { $lte: cg },
    date: { $gte: date },
    _id: { $nin: opportunityIds },
    category: { $gte: categoryMx },
  };
  const all = await Opportunity.find(filter);
  if (all) {
    res.status(200).send(all);
  } else res.send(422).json({ error: 'error' });
});

router.get('/interviewretrive', async (req, res) => {
  const { enrollment, cg } = req.query;

  if (!enrollment || !cg)
    res.status(422).json({ error: 'Fill all the fields' });

  const student = await Student.findOne({ enrollment: enrollment });
  const opportunityIds = student.opportunities;

  const filter = {
    stage: { $eq: 2 },
    _id: {
      $in: opportunityIds,
    },
  };
  const all = await Opportunity.find(filter);
  if (all) {
    res.status(200).send(all);
  } else {
    res.status(404).json({ error: 'error' });
  }
});
router.get('/offers', async (req, res) => {
  const { enrollment, cg } = req.query;

  if (!enrollment || !cg)
    res.status(422).json({ error: 'Fill all the fields' });

  const student = await Student.findOne({ enrollment: enrollment });
  const opportunityIds = student.opportunities;

  const filter = {
    stage: { $eq: 3 },
    _id: {
      $in: opportunityIds,
    },
  };
  const all = await Opportunity.find(filter);
  if (all) {
    res.status(200).send(all);
  } else {
    res.status(404).json({ error: 'error' });
  }
});

router.get('/codingroundretrive', async (req, res) => {
  const { enrollment, cg } = req.query;

  if (!enrollment || !cg)
    res.status(422).json({ error: 'Fill all the fields' });

  const student = await Student.findOne({ enrollment: enrollment });
  const opportunityIds = student.opportunities;

  const filter = {
    stage: { $eq: 1 },
    _id: {
      $in: opportunityIds,
    },
  };
  const all = await Opportunity.find(filter);
  if (all) {
    res.status(200).send(all);
  } else {
    res.status(404).json({ error: 'error' });
  }
});

router.get('/applicationretrive', async (req, res) => {
  const { enrollment, cg } = req.query;

  if (!enrollment || !cg)
    res.status(422).json({ error: 'Fill all the fields' });

  const student = await Student.findOne({ enrollment: enrollment });
  const opportunityIds = student.opportunities;

  const filter = {
    stage: { $eq: 1 },
    _id: {
      $in: opportunityIds,
    },
  };
  const all = await Opportunity.find(filter);
  if (all) {
    res.status(200).send(all);
  } else {
    res.status(404).json({ error: 'error' });
  }
});

router.get('/retriveopps', async (req, res) => {
  const { enrollment, cg } = req.body;

  if (!enrollment || !cg)
    res.status(422).json({ error: 'Fill all the fields' });

  const student = await Student.findOne({ enrollment: enrollment });
  const opportunityIds = student.opportunities;

  const filter = {
    _id: {
      $in: opportunityIds,
    },
  };
  const all = await Opportunity.find(filter);
  if (all) {
    res.status(200).send(all);
  } else {
    res.status(404).json({ error: 'error' });
  }
});

module.exports = router;
