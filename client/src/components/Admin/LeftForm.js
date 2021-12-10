import React from 'react';
import './admin.css';

const LeftForm = ({
  setCompanyName,
  setJobTitle,
  setCtc,
  setDate,
  setCategory,
  setCg,
  setPositionType,
  setStage,
  setStudents,
  setJobDescription,
  company_name,
  job_title,
  ctc,
  date,
  category,
  cg,
  position_type,
  stage,
  students,
  job_description,
  handleSubmit,
}) => {
  return (
    <div className="eight wide column" id="admin-left">
      <div className="ui container">
        <div className="fields">
          <div className="field">
            <label for="name">Company Name</label>
            <input
              type="text"
              value={company_name}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="field">
            <label for="role">Job Title</label>
            <input
              type="text"
              id="role"
              name="job_title"
              value={job_title}
              onChange={(e) => {
                setJobTitle(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label for="type">Position Type</label>
            <input
              type="text"
              id="type"
              name="position_type"
              value={position_type}
              onChange={(e) => {
                setPositionType(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label for="ctc">ctc</label>
            <input
              type="text"
              id="ctc"
              name="ctc"
              value={ctc}
              onChange={(e) => {
                setCtc(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label for="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label for="cg">cg</label>
            <input
              type="Number"
              step="0.1"
              id="cg"
              name="min_cg"
              value={cg}
              onChange={(e) => {
                setCg(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label for="description">Description</label>
            <textarea
              id="description"
              rows="3"
              name="job_description"
              value={job_description}
              onChange={(e) => setJobDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="inline fields">
          <label>Category</label>
          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="category"
                value="0"
                checked={category === '0'}
                onChange={(e) => setCategory(e.target.value)}
              />
              <label>mass</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="category"
                value="1"
                checked={category === '1'}
                onChange={(e) => setCategory(e.target.value)}
              />
              <label>below 10 LPA</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="category"
                value="2"
                checked={category === '2'}
                onChange={(e) => setCategory(e.target.value)}
              />
              <label>below 20 LPA</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="category"
                value="3"
                checked={category === '3'}
                onChange={(e) => setCategory(e.target.value)}
              />
              <label>Dream</label>
            </div>
          </div>
        </div>
        <div className="inline fields">
          <label className="stage">Opportunity Status</label>
          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="stage"
                value="0"
                checked={stage === '0'}
                onChange={(e) => setStage(e.target.value)}
              />
              <label>Application</label>
            </div>
          </div>

          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="stage"
                value="1"
                checked={stage === '1'}
                onChange={(e) => setStage(e.target.value)}
              />
              <label>Coding Round</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="stage"
                value="2"
                checked={stage === '2'}
                onChange={(e) => setStage(e.target.value)}
              />
              <label>Interview</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="stage"
                value="3"
                checked={stage === '3'}
                onChange={(e) => setStage(e.target.value)}
              />
              <label>Offer</label>
            </div>
          </div>
        </div>

        <button className="ui button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LeftForm;
