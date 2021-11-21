import React from 'react';
import { useState, useEffect } from 'react';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [joiningYear, setJoiningYear] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [course, setCourse] = useState('');
  const [branch, setBranch] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [codeforces, setCodeforces] = useState('');
  const [codechef, setCodechef] = useState('');
  const [resume, setResume] = useState('');
  const [edit, setEdit] = useState(true);

  useEffect(() => {}, [resume]);

  return (
    <div className="ui container">
      <form class="ui form">
        <fieldset disabled={edit ? 'disabled' : ''} style={{ border: 'none' }}>
          <div class="fields">
            <div class="field required">
              <label>First name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
            </div>
            <div class="field">
              <label>Middle name</label>
              <input
                type="text"
                value={middleName}
                onChange={(e) => {
                  setMiddleName(e.target.value);
                }}
              />
            </div>
            <div class="field required">
              <label>Last name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="fields">
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
          <div className="fields">
            <div class="field required">
              <label>Enrollment</label>
              <input
                type="text"
                value={enrollment}
                onChange={(e) => {
                  setEnrollment(e.target.value);
                }}
                required
              />
            </div>
            <div class="field required">
              <label>Joining Year</label>
              <input
                type="text"
                value={joiningYear}
                onChange={(e) => {
                  setJoiningYear(e.target.value);
                }}
                required
              />
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
            </div>
          </div>
          <div className="fields">
            <div class="field required">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div class="field required">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </div>
          <div className="fields">
            <div class="field required">
              <label>Couse</label>
              <input
                type="text"
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
                required
              />
            </div>
            <div class="field required">
              <label>Branch</label>
              <input
                type="text"
                value={branch}
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="fields">
            <div class="field">
              <label>Linkedin</label>
              <input
                type="url"
                value={linkedin}
                onChange={(e) => {
                  setLinkedin(e.target.value);
                }}
              />
            </div>
            <div class="field">
              <label>Github</label>
              <input
                type="url"
                value={github}
                onChange={(e) => {
                  setGithub(e.target.value);
                }}
              />
            </div>
            <div class="field">
              <label>Codeforces</label>
              <input
                type="url"
                value={codeforces}
                onChange={(e) => {
                  setCodeforces(e.target.value);
                }}
              />
            </div>
            <div class="field">
              <label>CodeChef</label>
              <input
                type="url"
                value={codechef}
                onChange={(e) => {
                  setCodechef(e.target.value(codechef));
                }}
              />
            </div>
          </div>
          {!edit && (
            <div className="ui two wide column field required">
              <label for="test" style={{ cursor: 'pointer' }}>
                Enter Resume Link
              </label>
              <input
                type="url"
                value={resume}
                onChange={(e) => {
                  setResume(e.target.value);
                }}
              />
            </div>
          )}
          {!edit && (
            <input
              type="submit"
              onSubmit={() => {
                setEdit(true);
              }}
            ></input>
          )}
        </fieldset>
      </form>
      {edit && (
        <button
          className="ui button"
          onClick={() => {
            setEdit(!edit);
            console.log(edit);
          }}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default Profile;
