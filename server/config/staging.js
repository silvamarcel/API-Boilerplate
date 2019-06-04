module.exports = {
  logging: true,
  logLevel: 'error',
  db: {
    url: process.env.MONGODB_URI || 'mongodb://localhost/boilerplatedb',
  },
  secrets: {
    jwt: process.env.JWT || 'stagingJWTSecret',
  },
};
