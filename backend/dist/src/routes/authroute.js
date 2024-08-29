"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authcontrollers_1 = require("../controllers/authcontrollers");
const router = express_1.default.Router();
router.post('/signup', authcontrollers_1.signup);
router.get('/login', authcontrollers_1.login);
router.get('/logout', authcontrollers_1.logout);
exports.default = router;
