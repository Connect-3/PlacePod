const express = require('express');
const router = express.Router();

const Opportunity = require('../models/Opportunity');
router.get('/getOpportunitiesAdmin', async (req, res) => {
  try {
    const all = await Opportunity.find({});
    if (all) {
      res.status(200).send(all);
    } else {
      res.status(404).json({ error: 'error' });
    }
  } catch (err) {
    res.send(err);
  }
});

router.post('/deleteOpportunity', async (req, res) => {
  try {
    const { _id } = req.body;
    const opp = await Opportunity.findOne({ _id: _id });
    let students = opp.students;
    students = students.map((student) => student.enrollment);
    students = await Student.find({ enrollment: { $in: students } });
    for (let i = 0; i < students.length; i++) {
      const idx = students[i].opportunities.indexOf(_id);
      if (idx !== -1) {
        students[i].opportunities.splice(idx, 1);
        students[i].save();
      }
    }
    const opportunity = await Opportunity.findByIdAndRemove(_id);
    res.status(200).json({ message: 'opportunity deleted' });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/addStudents', async (req, res) => {
  const { textarea, _id } = req.body;
  const array = textarea.split(',');
  console.log(array);
  const filter = { enrollment: { $in: array } };
  const studentArray = await Student.find(filter);
  console.log(studentArray.length);
  if (studentArray.length !== array.length)
    return res.status('404').json({ message: 'Invalid Credential' });
  const addStudentArray = studentArray.map((student) => {
    return { enrollment: student.enrollment, resume: student.resume };
  });

  // console.log(addStudentArray);

  for (let i = 0; i < studentArray.length; i++) {
    const idx = studentArray[i].opportunities.indexOf(_id);
    console.log(idx);
    if (idx >= 0) {
      return res.status(404).json({ message: 'Already Exist' });
    }
    console.log(';lkjkj');
    if (idx === -1) {
      studentArray[i].opportunities.push(_id);
      await studentArray[i].save();
    }
  }

  const Opp = await Opportunity.findOne({ _id: _id });

  Opp.students = Opp.students.concat(addStudentArray);
  await Opp.save();
  res.status(200).json({ message: 'students updated' });
});

router.get('/getArray', async (req, res) => {
  try {
    const { _id } = req.query;
    const opp = await Opportunity.findOne({ _id: _id });
    if (opp) res.status(200).json({ array: opp.students });
    else res.status(404).json({ message: 'array retrieval fail' });
  } catch (err) {
    res.status(404).json({ message: 'array retrieval fail' });
  }
});
module.exports = router;
