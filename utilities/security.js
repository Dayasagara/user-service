const jwt = require( "jsonwebtoken" );
const config = require('../config/config');
const repository = require('../dbRepo/repository')

module.exports = function( token) {
        return jwt.verify( token, config.secretKey, function( err, decoded ) {
            if ( err ) {
                console.log( err );
                throw(err)
            }
            if (repository.authenticateUser(decoded.email, decoded.encryptedPwd)){
                return decoded
            }
            throw("Authentication problem");
        } );
};
