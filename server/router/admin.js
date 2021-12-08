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
    const opportunity = await Opportunity.findByIdAndRemove(_id);
    if (!opportunity) {
      res.status(404).send("Opportunity doesn't exist");
    }
    res.status(200).send('Opportunity Deleted');
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get('')

module.exports = router;
