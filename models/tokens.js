var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var tokensSchema = new Schema({
    user          : { type: String, required: true, trim: true, index: { unique: true } }
  , tipo   : { type: String, required: true, trim: true }
  , date_created  : { type: Date, required: true, default: Date.now }
  , token : {type: String, required: true, trim: true }
});

var tokens = mongoose.model('tokens', usersSchema);

module.exports = {
  Tokens: tokens
};