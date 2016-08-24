var token = require('../models/tokens').Tokens;

function tokenValidation() {
    this.validate = function (tokenSent) {
        console.log('Me estoy llamando');
        if (!tokenSent)
            return [404, 'Please send Token'];
        else {
            token.findOne({ token: tokenSent }, function (er, doc) {
                if (!er) {
                    if (doc) {
                        return 200;
                    }
                    else {
                        return [401, 'Bad Token'];
                    }
                } else {
                    return [500, { message: er }];
                }
            });
        }
    }
}

module.exports = new tokenValidation();