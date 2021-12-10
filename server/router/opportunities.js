const express = require('express');
const router = express.Router();

require('../db/conn');
const Opportunity = require('../models/Opportunity');
const Student = require('../models/Student');

router.post('/opportunity', async (req, res) => {
  try {
    const {
      company_name,
      job_title,
      ctc,
      category,
      min_cg,
      position_type,
      job_description,
      job_description_pdf,
      stage,
      students,
      date,
    } = req.body;

    if (
      !company_name ||
      !job_title ||
      !ctc ||
      !date ||
      !category ||
      !min_cg ||
      !position_type ||
      !job_description ||
      !stage ||
      !students
    ) {
      res.status(422).json({ error: 'Fill all the fields' });
    }

    const key = company_name + '_' + job_title + '_' + stage + '_' + date;

    const entry = await Opportunity.findOne({ key: key });

    if (entry) {
      res.status(422).json({ error: 'Opportunity Already Exist' });
    }

    const opportunity = new Opportunity({
      company_name,
      job_title,
      ctc,
      date,
      category,
      min_cg,
      position_type,
      job_description,
      job_description_pdf,
      stage,
      students,
      key,
    });

    const opportunityAdded = await opportunity.save();

    if (opportunityAdded) {
      res.status(201).json({ message: 'opportunity added' });
    } else {
      res.status(400).json({ message: 'error' });
    }
  } catch {
    (err) => console.log(err);
  }
});

router.post('/editopportunity', async (req, res) => {
  try {
    const {
      company_name,
      job_title,
      ctc,
      category,
      min_cg,
      position_type,
      job_description,
      stage,
      students,
      date,
      _id,
    } = req.body;

    if (
      !company_name ||
      !job_title ||
      !ctc ||
      !date ||
      !category ||
      !min_cg ||
      !position_type ||
      !job_description ||
      !stage ||
      !_id
    ) {
      res.status(422).json({ error: 'Fill all the fields' });
    }

    const entry = await Opportunity.findOne({ _id: _id });
    let enrollmentArray = entry.students;
    enrollmentArray = enrollmentArray.map((student) => student.enrollment);
    if (enrollmentArray.length) {
      const studentArray = await Student.find({
        enrollment: { $in: enrollmentArray },
      });

      for (let i = 0; i < studentArray.length; i++) {
        const idx = studentArray[i].opportunities.indexOf(_id);
        if (idx !== -1) {
          studentArray[i].opportunities.splice(idx, 1);
          studentArray[i].save();
        }
      }
    }
    entry.company_name = company_name;
    entry.job_title = job_title;
    entry.ctc = ctc;
    entry.date = date;
    entry.category = category;
    entry.min_cg = min_cg;
    entry.position_type = position_type;
    entry.job_description = job_description;
    entry.stage = stage;
    entry.students = students;

    let enrollmentArray2 = students;
    enrollmentArray2 = enrollmentArray2.map((student) => student.enrollment);
    const studentArray2 = await Student.find({
      enrollment: { $in: enrollmentArray2 },
    });

    for (let i = 0; i < studentArray2.length; i++) {
      studentArray2[i].opportunities.push(entry._id);
      studentArray2[i].save();
    }

    entry.save();
    res.status(201).json({ message: 'opportunity Updated' });
  } catch (err) {
    (err) => res.send(404);
  }
});

module.exports = router;
