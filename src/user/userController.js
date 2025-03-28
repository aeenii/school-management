const User = require('../models/userModel');

const register = async (req, res) => {
    const {  studentName,email, InstitutId,boardId,mediumId,classId,standerdId,subjectIds } = req.body;
    try {
      const user = new User({ studentName,email, InstitutId,boardId,mediumId,classId,standerdId,subjectIds});
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  };
module.exports = { register };
