import jwt from 'jsonwebtoken';

let JWT_SECRET = process.env.JWT_SECRET

export const generateToken = ( { userId , email } ) => {
    return jwt.sign({ userId , email }, JWT_SECRET, {
        expiresIn: '30d',
    });
}