"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var index_1 = require("./routes/index");
var app = express_1.default();
exports.app = app;
var port = 8080;
app.use('/api', index_1.routes);
app.listen(port, function () {
    console.log("This app listening at http://localhost:" + port);
});
//# sourceMappingURL=server.js.map