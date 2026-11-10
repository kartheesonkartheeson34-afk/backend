const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Authentication middleware
const authmiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Token missing"
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};

// Role authorization middleware
const authorizeRole = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                message: "Please login first"
            });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Forbidden. You do not have permission"
            });
        }

        next();
    };
};

// Allows users to access their own profile or authorized roles
const checkSelfOrRole = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                message: "Please login first"
            });
        }

        const requestedUserId = req.params.id;
        const loggedInUserId = req.user.id;

        const isSelf =
            requestedUserId === String(loggedInUserId);

        const hasRole = roles.includes(req.user.role);

        if (isSelf || hasRole) {
            return next();
        }

        return res.status(403).json({
            message: "Forbidden. You can only update your own profile."
        });
    };
};

module.exports = {
    authmiddleware,
    authorizeRole,
    checkSelfOrRole
};