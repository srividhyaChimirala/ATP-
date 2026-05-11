
import jwt from "jsonwebtoken";

const { verify } = jwt;

export function VerifyToken(req, res, next) {

    // Token Verification Logic
    const token = req.cookies?.token;

    // If Request Is Unauthorized
    if (!token) {

        return res.status(401).json({
            message: "plz login"
        });

    }

    // If Token Exists
    try {

        const decodedToken = verify(
            token,
            "abcdef"
        );

        console.log(decodedToken);

        // Attach Decoded Token To Request
        req.user = decodedToken;

        next();

    }
    catch (err) {

        res.status(401).json({
            message: "session expired, plz relogin"
        });

    }

}

