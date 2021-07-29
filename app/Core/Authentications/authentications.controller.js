const { validateUserCredentials } = require('../../Features/Users/users.controller');
const {
  createSession,
} = require('./Sessions/sessions.controller');

const {
  generateAccessToken,
  generateRefreshToken
} = require('../Authentications/Jwt/utils');

const login = async (req, res) => {
  try {
    const userExist = await validateUserCredentials(req, res);

    let accessToken = await generateAccessToken(userExist);
    let refreshToken = await generateRefreshToken(userExist);

    const session = await createSession(userExist.userLogged.id, refreshToken);

    res.set({
      'x-access-token': accessToken,
      'x-refresh-token': refreshToken
    });

    res.send({
      message:
        'Successfully authenticated. The accessToken and refreshToken are returned in two headers name x-access-token and x-refresh-token.'
    });
  } catch (err) {
    res.status(res.statusCode || 500);
    res.send({ message: err.message });
  }
};

module.exports = { login };
