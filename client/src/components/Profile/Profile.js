import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = ({ setStudentData, studentData }) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cg, setCg] = useState(0);
  const [gender, setGender] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [codeforces, setCodeforces] = useState('');
  const [codechef, setCodechef] = useState('');
  const [resume, setResume] = useState('');
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({});

  const updateProfile = async () => {
    try {
      console.log(gender);
      const res = await axios.post('/updateProfile', {
        enrollment,
        email,
        firstName,
        middleName,
        lastName,
        phone,
        gender,
        branch,
        graduationYear,
        cg,
        linkedin,
        github,
        codeforces,
        codechef,
        resume,
      });
      if (res.status === 201) alert('profile updated');
      else console.log(res.error);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const response = async () => {
      const res = await axios.get('/retrieveProfile', {
        params: {
          enrollment: localStorage.getItem('enrollment'),
        },
      });
      setData(res.data);
    };
    response();
  }, []);

  useEffect(() => {
    if (data.firstName) setFirstName(data.firstName);

    if (data.middleName) setMiddleName(data.middleName);

    if (data.lastName) setLastName(data.lastName);

    if (data.email) setEmail(data.email);

    if (data.enrollment) setEnrollment(data.enrollment);

    if (data.gender) setGender(data.gender);

    if (data.branch) setBranch(data.branch);

    if (data.cg) setCg(data.cg);

    if (data.phone) setPhone(data.phone);

    if (data.graduationYear) setGraduationYear(data.graduationYear);

    if (data.linkedin) setLastName(data.linkedin);

    if (data.github) setGithub(data.github);

    if (data.codechef) setCodechef(data.codechef);

    if (data.codeforces) setCodeforces(data.codeforces);

    if (data.resume) setResume(data.resume);
  }, [data]);
  // useEffect(() => {
  //   try {
  //     const response = async () => {
  //       const res = await axios.get('/feed', { withCredentials: true });
  //       if (res.data === 'token undefined') window.location = '/';
  //       if (!res.status === 200) {
  //         const error = new Error(res.error);
  //         throw error;
  //       }
  //       if (!res.status === 200) {
  //         window.location = '/';
  //         const error = await new Error(res.error);
  //         console.log(error);
  //         throw error;
  //       }
  //       setStudentData(res.data);
  //       if (firstName) setFirstName(studentData.firstName);
  //       else setFirstName('');
  //       if (lastName) setLastName(studentData.lastName);
  //       else setLastName('');
  //       if (middleName) setMiddleName(studentData.middleName);
  //       else setMiddleName('');
  //       if (cg) setCg(studentData.cg);
  //       else setCg(null);
  //       if (branch) setBranch(studentData.branch);
  //       else setBranch('');
  //       if (codechef) setCodechef(studentData.codechef);
  //       else setCodechef('');
  //       if (codeforces) setCodeforces(studentData.codeforces);
  //       else setCodeforces('');
  //       if (enrollment) setEnrollment(studentData.enrollment);
  //       else setEnrollment('');
  //       if (email) setEmail(studentData.email);
  //       else setEmail('');
  //       if (gender) setGender(studentData.gender);
  //       else setGender('');
  //       if (graduationYear) setGraduationYear(studentData.graduationYear);
  //       else setGraduationYear('');
  //       if (linkedin) setLinkedin(studentData.linkedin);
  //       else setGraduationYear('');
  //       if (github) setGithub(studentData.github);
  //       else setGithub('');
  //       if (resume) setResume(studentData.resume);
  //       else setResume('');
  //     };
  //     response();
  //   } catch (err) {
  //     window.location = '/';
  //   }
  // }, [
  //   setStudentData,
  //   firstName,
  //   middleName,
  //   lastName,
  //   enrollment,
  //   email,
  //   branch,
  //   graduationYear,
  //   github,
  //   resume,
  //   linkedin,
  //   gender,
  //   codechef,
  //   codeforces,
  //   cg,
  //   studentData,
  // ]);

  if (firstName === '' && edit === true) {
    return (
      <div className="new-profile">
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
              <label>firstName</label>
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
              <label>middleName</label>
              <input
                type="text"
                value={middleName}
                onChange={(e) => {
                  setMiddleName(e.target.value);
                }}
              />
            </div>
            <div className="field required">
              <label>lastName</label>
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
              <label>Cg</label>
              <input
                type="number"
                step="0.01"
                value={cg}
                onChange={(e) => setCg(e.target.value)}
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
            {/* <div className="field required">
              <label>Joining Year</label>
              <input
                type="text"
                value={joiningYear}
                onChange={(e) => {
                  setJoiningYear(e.target.value);
                }}
                required
              />
            </div> */}
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
              <input
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="fields">
            {/* <div className="field required">
              <label>Couse</label>
              <input
                type="text"
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
                required
              />
            </div> */}
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
              onClick={updateProfile}
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
          }}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default Profile;
