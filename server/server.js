const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config({ path: './config.env' });

require('./db/conn'); // mongoose imported
app.use(cookieParser());
app.use(express.json());
app.use(require('./router/auth'));
app.use(require('./router/opportunities'));
app.use(require('./router/Profile'));
// app.get('/', (req, res) => {
// res.send('hello world');
// }); // linked our router file

app.post('/student', (req, res) => {
  const { enrollment, email, password } = req.body;
});
// const Student = require('./models/Student');  Studend Schema
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('app running');
});
