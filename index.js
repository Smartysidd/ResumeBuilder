// backend/index.js

const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const templateRoutes = require('./routes/templateRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const path=require('path');
dotenv.config({
  path:path.join(__dirname,'./.env')
})


const PORT =8080;
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/templates', templateRoutes);
app.use('/api/resumes', resumeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
