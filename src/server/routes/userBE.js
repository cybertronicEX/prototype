const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const app = express();
// const userModel = require('../models/usermodel');
// const PORT = process.env.PORT || 5000;
// const MONGODB_URI = 'mongodb://localhost:27017/foodapp'; // Change this to your MongoDB URI
const cors = require('cors');
const UserModel = require('../models/usermodel');
const router = express.Router();
// router.use(bodyParser.json());
router.use(express.json());
router.use(cors());


// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


// Logic function: Dummy function to perform some operation
// const performSomeOperation = (data) => {
//   // Your logic here
//   console.log('Performing operation with:', data);
// };

router.post('/addusers', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user.' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password.' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', {
      expiresIn: '1h', // Token expiration time
    });
    
    // At this point, the login is successful
    res.status(200).json({ message: 'Login successful.' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed.' });
  }
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

module.exports = router;