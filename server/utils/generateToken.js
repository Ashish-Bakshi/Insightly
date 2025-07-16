import jwt from 'jsonwebtoken';

let JWT_SECRET = process.env.JWT_SECRET

export const generateToken = ( { id , email } ) => {
    return jwt.sign({ id , email }, JWT_SECRET, {
        expiresIn: '30d',
    });
}