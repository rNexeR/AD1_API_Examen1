var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var tokensSchema = new Schema({
    user          : { type: String, required: true, trim: true}
  , date_created  : { type: Date, required: true, default: Date.now }
  , token : {type: String, required: true, trim: true }
});

var tokens = mongoose.model('tokens', tokensSchema);

module.exports = {
  Tokens: tokens
};