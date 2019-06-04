module.exports = {
  logging: true,
  logLevel: 'error',
  db: {
    url: process.env.MONGODB_URI || 'mongodb://localhost/boilerplatedbtest',
  },
  secrets: {
    jwt: process.env.JWT || 'testingJWTSecret',
  },
};
