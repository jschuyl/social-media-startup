const { connect, connection } = require('mongoose');

const letMeIn = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialMedia';

connect(letMeIn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
