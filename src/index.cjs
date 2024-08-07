const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');


const app = express();
const connectDB = require('./db.cjs');

connectDB();

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`)  
})