"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.images = void 0;
var express_1 = __importDefault(require("express"));
var proccess_1 = require("../../imageProcessing/proccess");
var path_1 = __importDefault(require("path"));
var images = express_1.default.Router();
exports.images = images;
images.get('/', function (req, res) {
    var filename = req.query.filename;
    var width = req.query.width;
    var height = req.query.height;
    proccess_1.resize(filename, width, height).then(function (file) {
        res.sendFile(path_1.default.resolve(file));
    }).catch(function (e) { return res.send(e); });
});
//# sourceMappingURL=images.js.map