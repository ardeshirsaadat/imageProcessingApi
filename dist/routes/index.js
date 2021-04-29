"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = __importDefault(require("express"));
var images_1 = require("./api/images");
var routes = express_1.default.Router();
exports.routes = routes;
routes.get('/', function (req, res) {
    res.send('this is the landing page');
});
routes.use('/images', images_1.images);
//# sourceMappingURL=index.js.map