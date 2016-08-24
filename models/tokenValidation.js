var token = require('../models/tokens').Tokens;

function tokenValidation() {
    this.validate = function (tokenSent, next) {
        console.log('Me estoy llamando');
        if (!tokenSent)
            next = false;
        else {

            token.findOne({ token: tokenSent }, function (er, doc) {
                if (!er) {
                    console.log(doc);
                    if (doc) {
                        next = true;
                    }
                    else {
                        next = false;
                    }
                } else {
                    next = false;
                }
            });


        }
    }
}

module.exports = new tokenValidation();