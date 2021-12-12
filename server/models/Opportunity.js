const mongoose = require('mongoose');

const OpportunitySchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
    required: true,
  },
  ctc: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  min_cg: {
    type: Number,
    required: true,
  },
  position_type: {
    type: String,
    required: true,
  },
  job_description: {
    type: String,
    required: true,
  },
  job_description_pdf: {
    type: String,
    required: false,
  },
  stage: {
    type: String, 
    required: true,
  },
  students: {
    type: Array,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
});

module.exports = Opportunity = mongoose.model('opportunity', OpportunitySchema);
