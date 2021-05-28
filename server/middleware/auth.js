import jwt from 'jsonwebtoken';

// wants to like a post
// click the like button 
// auth middleware confirms or denies
// confirms => only then like controller
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        console.log(token);

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.SECRET);

            req.userName = decodedData.name;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;