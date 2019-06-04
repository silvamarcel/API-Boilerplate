module.exports = {
  logging: true,
  logLevel: 'debug',
  db: {
    url: process.env.MONGODB_URI || 'mongodb://localhost/boilerplatedb',
  },
  secrets: {
    jwt: process.env.JWT || 'devJWTSecret',
  },
};
