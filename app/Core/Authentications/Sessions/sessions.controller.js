const sessionsModel = require('./sessions.model');

// Create and save a new session
exports.createSession = async (userId, refreshToken) => {
  try {
    const newSession = await sessionsModel.create({
      userId: userId,
      refreshToken: refreshToken,
    });
    return newSession;
  } catch (err) {
    throw Error(err.message);
  }
};

exports.validateSessionExist = async (userId, refreshToken) => {
  try {
    const session = await sessionsModel.findOne({
      where: { userId, refreshToken },
    });
    return session.toJSON();
  } catch (err) {
    throw Error(err.message);
  }
};
