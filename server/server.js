const express = require('express')
const app = express();

app.get('/',(req,res) => res.send('Hello Worlsdfd'));
const port = process.env.PORT || 8082;

app.listen(port,()=> console.log(`Server is running on port ${(port)}`));