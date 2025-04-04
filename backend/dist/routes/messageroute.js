"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const protectRoute_js_1 = __importDefault(require("../middleware/protectRoute.js"));
const messagecontrollers_js_1 = require("../controllers/messagecontrollers.js");
const router = express_1.default.Router();
router.get('/conversations', protectRoute_js_1.default, messagecontrollers_js_1.getUsersForSidebar);
router.get('/:id', protectRoute_js_1.default, messagecontrollers_js_1.getMessages);
router.post('/send/:id', protectRoute_js_1.default, messagecontrollers_js_1.sendMessage);
exports.default = router;
