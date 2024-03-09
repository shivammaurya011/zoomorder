const { body, validationResult } = require('express-validator');

const registrationValidation = [
  body('fullName')
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage('Full name must be between 3 and 50 characters.')
    .matches(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/)
    .withMessage('Full name can only contain letters and spaces.'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Invalid email address.'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long.')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{6,}$/)
    .withMessage(
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
    ),
];

const validateRegistration = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => ({ field: error.param, message: error.msg }));
    return res.status(400).json({ errors: errorMessages });
  }
  next();
};

module.exports = { registrationValidation, validateRegistration };
