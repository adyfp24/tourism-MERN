const jwt = require('jsonwebtoken');

export const generateJWT = (_id: any, username: any) => {
    const apiToken = jwt.sign({ id: _id, username: username }, process.env.JWT_SECRET);
    return apiToken;
}

