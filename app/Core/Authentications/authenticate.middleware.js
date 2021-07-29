const { generateAccessToken, verifyAccessToken, verifyRefreshToken } = require('../Authentications/Jwt/utils');
const { validateSessionExist } = require('./Sessions/sessions.controller');
const { errorsJWT } = require('../../../config/enums');

const authenticate = (req, res, next) => {
  try {
    let accessToken = req.headers['x-access-token'];
    const payloadAccessToken = verifyAccessToken(accessToken);
    req.body.userId = payloadAccessToken.userLogged.id;
    next();
  } catch (err) {
    switch (err.message) {
      case errorsJWT.EXPIRED:
        refresh(req, res, next);
        break;
      default:
        res.status(401).send({ message: err.message });
        break;
    }
  }

};

const refresh = async (req, res, next) => {
  try {
    let refreshToken = req.headers['x-refresh-token'];
    const payloadRefreshToken = verifyRefreshToken(refreshToken);

    const refreshTokenExist = await validateSessionExist(
      payloadRefreshToken.userLogged.id,
      refreshToken
    );

    let newToken = await generateAccessToken(payloadRefreshToken.userLogged);

    res.set({
      'x-access-token': newToken,
      'x-refresh-token': refreshToken
    });
    next();
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
};

module.exports = { authenticate };
