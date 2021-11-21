import React, { useState } from 'react';

const CompanyData = () => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="ui container">
      <form className="ui form">
        <fieldset disabled={edit ? 'disabled' : ''} style={{ border: 'none' }}>
          <div className="fields">
            <div className="field">
              <label for="name">Company Name</label>
              <input type="text" id="name" />
            </div>
            <div className="field">
              <label for="role">Job role</label>
              <input type="text" id="role" />
            </div>
            <div className="field">
              <label for="type">Job type</label>
              <input type="text" id="type" />
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <label for="ctc">Ctc</label>
              <input type="text" id="ctc" />
            </div>
            <div className="field">
              <label for="register-date">Registration Date</label>
              <input type="date" id="register-date" />
            </div>
            <div className="field">
              <label for="test-date">Test Date</label>
              <input type="date" id="test-date" />
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <label for="description">Description</label>
              <textarea id="description" rows="3"></textarea>
            </div>
            <div className="field">
              <label for="ctc breakup">Ctc breakup</label>
              <textarea id="ctc breakup" rows="3"></textarea>
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <label for="duration">ELIGIBLE COURSES (INCOMPLETE)</label>
              <textarea id="duration" rows="3"></textarea>
            </div>
            <div className="field">
              <label for="Eligibility Courses">Eligibility Courses</label>
              <textarea id="eligibility courses" rows="3" />
            </div>
            <div className="field">
              <label for="other">Other Details</label>
              <textarea id="other" rows="3" cols="3" />
            </div>
          </div>
          <div className="field">
            {edit && <input type="submit" className="ui button" />}
          </div>
        </fieldset>
      </form>
      <div className="field">
        {!edit && <button className="ui button">Edit Details</button>}
      </div>
    </div>
  );
};

{
  /* <div className="fields">
            <div class="field required">
              <label>Birth Date</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
              />
            </div>
            <div class="field required">
              <label for="gender">Gender</label>

              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div class="field required">
              <label>Graduation Year</label>
              <input
                type="text"
                value={graduationYear}
                onChange={(e) => {
                  setGraduationYear(e.target.value);
                }}
                required
              />
            </div> */
}

export default CompanyData;
