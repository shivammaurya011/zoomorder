const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const secretKey = process.env.JWT_SECRATE_KEY;

const userController = {
  register: async (req, res) => {
    try {
      const { fullName, email, password } = req.body;
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: 'Email is already registered.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        fullName,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
      console.error('Error in register controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }

      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1d' });
      res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        secure: process.env.COOKIE_SECRET === 'production',
      });
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error in login controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
    } catch (error) {
      console.error('Error in getAllUsers controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getProfile: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      const userProfile = {
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        profilePicture: user.profilePicture,
        dateOfBirth: user.dateOfBirth,
        gender: user.gender,
        dietaryPreferences: user.dietaryPreferences,
        favoriteCuisines: user.favoriteCuisines,
      };

      res.status(200).json(userProfile);
    } catch (error) {
      console.error('Error in getProfile controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateProfile: async (req, res) => {
    try {
      const userId = req.params.userId;
      const updatedProfileData = req.body;
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      user.fullName = updatedProfileData.fullName || user.fullName;
      user.phoneNumber = updatedProfileData.phoneNumber || user.phoneNumber;
      user.address = updatedProfileData.address || user.address;
      user.profilePicture = updatedProfileData.profilePicture || user.profilePicture;
      user.dateOfBirth = updatedProfileData.dateOfBirth || user.dateOfBirth;
      user.gender = updatedProfileData.gender || user.gender;
      user.dietaryPreferences = updatedProfileData.dietaryPreferences || user.dietaryPreferences;
      user.favoriteCuisines = updatedProfileData.favoriteCuisines || user.favoriteCuisines;

      await user.save();

      res.status(200).json({ message: 'User profile updated successfully.' });
    } catch (error) {
      console.error('Error in updateProfile controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteProfile: async (req, res) => {
    try {
      const userId = req.params.userId;
      const deletedUser = await User.findByIdAndRemove(userId);

      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found.' });
      }

      res.status(200).json({ message: 'User profile deleted successfully.' });
    } catch (error) {
      console.error('Error in deleteProfile controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = userController;