const jwt = require('jsonwebtoken');

export const generateJWT = (id_user: any) => {
    const apiToken = jwt.sign({ id_user: id_user }, process.env.JWT_SECRET);
    return apiToken;
}

