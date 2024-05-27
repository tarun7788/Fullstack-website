const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');
const Signup = require('./models/signupSchema');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcryptjs');

const app = express();
const PORT=process.env.PORT;
const URL =process.env.URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});



app.use(cors());
app.use(bodyParser.json());

app.post('/aboutus', async (req, res) => {
  console.log('Received data:', req.body);
  try {
    const { name, email, message} = req.body.formData;
    const newUser = new User({ name, email, message });
    await newUser.save();
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/register', async (req, res) => {
  console.log('Received data:', req.body);
  try {
    const { name, email, password} = req.body.formData;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newSignup = new Signup({ name, email, password:hashedPassword });
    await newSignup.save();
    res.status(200).json({ message: 'MUser Registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
});
