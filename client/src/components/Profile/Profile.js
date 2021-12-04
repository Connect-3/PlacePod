import React from 'react';
import { useState, useEffect } from 'react';
import './Profile.css';

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

  if (firstName === '' && edit === true) {
    return (
      <div classNameName="new-profile">
        <div className="ui vertical steps">
          <div className="completed step">
            <i className="truck icon"></i>
            <div className="content">
              <div className="title">Create an Account</div>
              {/* <div className="description">Choose your shipping options</div> */}
            </div>
          </div>
          <div className="completed step">
            <i className="truck icon"></i>
            <div className="content">
              <div className="title">Login Into the Placepod</div>
            </div>
          </div>
          <div className="active step">
            <i className="info icon"></i>
            <div className="content">
              <div
                className="title"
                onClick={() => {
                  setEdit(false);
                }}
                style={{ cursor: 'pointer' }}
              >
                Complete Your Profile
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="ui container" id="profile">
      <h1 className="header" id="profile-heading">
        Profile
      </h1>
      <br />
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          setEdit(true);
        }}
      >
        <fieldset disabled={edit ? 'disabled' : ''} style={{ border: 'none' }}>
          <div className="fields">
            <div className="field required">
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
            <div className="field">
              <label>Middle name</label>
              <input
                type="text"
                value={middleName}
                onChange={(e) => {
                  setMiddleName(e.target.value);
                }}
              />
            </div>
            <div className="field required">
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
            <div className="field required">
              <label>Birth Date</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
              />
            </div>
            <div className="field required">
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
            <div className="field required">
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
            <div className="field required">
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
            <div className="field required">
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
            <div className="field required">
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
            <div className="field required">
              <label for="phone">Phone Number</label>
              <input type="text" />
            </div>
          </div>
          <div className="fields">
            <div className="field required">
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
            <div className="field required">
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
            <div className="field">
              <label>Linkedin</label>
              <input
                type="url"
                value={linkedin}
                onChange={(e) => {
                  setLinkedin(e.target.value);
                }}
              />
            </div>
            <div className="field">
              <label>Github</label>
              <input
                type="url"
                value={github}
                onChange={(e) => {
                  setGithub(e.target.value);
                }}
              />
            </div>
            <div className="field">
              <label>Codeforces</label>
              <input
                type="url"
                value={codeforces}
                onChange={(e) => {
                  setCodeforces(e.target.value);
                }}
              />
            </div>
            <div className="field">
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
            <div className="ui four wide column field required">
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
              className="ui button"
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
          id="profile-edit"
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
