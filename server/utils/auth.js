const jwt = require('jsonwebtoken');

const secret = 'cantstopwontstopgreeneshop';
const expiration = '2h';

// * Serialized:   format -->  [header].[payload].[signature]
// 	* mainly used to transfer the data through the network with each request and response

// * Deserialized: 
// 	* is used to Read and Write data to the web token
// 	* JWT in the deserialized form contains Only the header and the payload. Both of them are plain JSON objects.


module.exports = {
  authMiddleware: function ({ req }) {

    let token = req.body.token || req.query.token || req.headers.authorization;
   
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) { token = token.split(' ').pop().trim() }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch { console.log('Invalid token') }

    return req;
  },

  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
