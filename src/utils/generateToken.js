const jwt = require('jsonwebtoken');

const generateToken = (user) => jwt.sign(
  {
    userId: user._id,
    role: user.role || 'vendor',
    email: user.email,
  },
  process.env.JWT_SECRET || 'myjwtsecret',
  { expiresIn: '24h' },
);

// to generate a token
console.log(generateToken({
  _id: '682e5d2a09fd7a6fe00cf9dc',
  role: 'vendor',
  email: 'admin@example.com',
}));
