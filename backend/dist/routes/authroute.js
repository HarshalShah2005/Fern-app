"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authcontrollers_1 = require("../controllers/authcontrollers");
const protectRoute_1 = __importDefault(require("../middleware/protectRoute"));
const router = express_1.default.Router();
router.get("/me", protectRoute_1.default, authcontrollers_1.getMe);
router.post('/signup', authcontrollers_1.signup);
router.post('/login', authcontrollers_1.login);
router.post('/logout', authcontrollers_1.logout);
exports.default = router;
