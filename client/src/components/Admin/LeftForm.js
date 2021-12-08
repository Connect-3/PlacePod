import React from 'react';
import './admin.css';

const LeftForm = ({ handleChange, handleSubmit }) => {
  return (
    <div className="eight wide column" id="admin-left">
      <div className="ui container">
        <div className="fields">
          <div className="field">
            <label for="name">Company Name</label>
            <input
              type="text"
              id="name"
              name="company_name"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label for="role">Job Title</label>
            <input
              type="text"
              id="role"
              name="job_title"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label for="type">Position Type</label>
            <input
              type="text"
              id="type"
              name="position_type"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label for="ctc">ctc</label>
            <input type="text" id="ctc" name="ctc" onChange={handleChange} />
          </div>
          <div className="field">
            <label for="date">Date</label>
            <input type="date" id="date" name="date" onChange={handleChange} />
          </div>
          <div className="field">
            <label for="cg">cg</label>
            <input
              type="String"
              id="cg"
              name="min_cg"
              onChange={handleChange}
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
              onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
