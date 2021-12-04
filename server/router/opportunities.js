const express = require('express');
const router = express.Router();

require('../db/conn');
const Opportunity = require('../models/Opportunity');

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
      !job_description_pdf ||
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
      res.status(400).json({message: 'error'});
    }
  } catch {
    (err) => console.log(err);
  }
});

module.exports = router;
