const jwt = require("jsonwebtoken");

const generateAccessToken = async (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    algorithm: process.env.ALGORITHM_TOKEN,
    expiresIn: process.env.ACCESS_TOKEN_LIFE,
  });
};

const generateRefreshToken = async (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    algorithm: process.env.ALGORITHM_TOKEN,
    expiresIn: process.env.REFRESH_TOKEN_LIFE,
  });
};

const verifyAccessToken = (token) => {
  try {
    return jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );
  } catch (err) {
    throw Error(err.message);
  }
};

const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET
    );
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken };
