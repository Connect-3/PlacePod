const jwt = require('jsonwebtoken');
const Student = require('../models/Student');

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwttoken;
    if (!token) res.send('token undefined');
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootStudent = await Student.findOne({
      _id: verifyToken._id,
      'tokens.token': token,
    });
    if (!rootStudent) {
      throw new Error('Student not Found');
    }

    req.token = token;
    req.rootStudent = rootStudent;
    req.StudentID = rootStudent._id;

    next();
  } catch (err) {
    res.status(400);
  }
};

module.exports = Authenticate;
