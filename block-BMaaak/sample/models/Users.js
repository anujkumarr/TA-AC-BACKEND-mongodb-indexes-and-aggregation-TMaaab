var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  address: {
    ciyt: { type: String },
    state: { type: String, unique: true },
    country: { type: String, unique: true },
    pin: { type: String, unique: true }
  }
  
});
userSchema.index({ country: 1, state: 1 });

module.exports = mongoose.model('User', userSchema);

