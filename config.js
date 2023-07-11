module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/bitfilmsdb",
  JWT_SECRET: process.env.JWT_SECRET || "jwt-secret",
  NODE_ENV: process.env.NODE_ENV,
};
