var token = require('../models/tokens').Tokens;

function tokenValidation() {
    this.validate = function (tokenSent, callback) {
        var reply;
        console.log('Me estoy llamando');
        if (!tokenSent)
            reply = [404, 'Please send Token'];
        else {
            token.findOne({ token: tokenSent }, function (er, doc) {
                if (!er) {
                    if (doc != '') {
                        rreply = 200;
                    }
                    else {
                        reply = [401, 'Bad Token'];
                    }
                } else {
                    reply = [500, { message: er }];
                }
            });
        }

        if (typeof callback === 'function') {
            callback(reply);
        }
    }
}

module.exports = new tokenValidation();