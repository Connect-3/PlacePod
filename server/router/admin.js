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

router.get('');

module.exports = router;
