"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("react-dom/server"));
const Header_1 = require("../shared/Header");
const indexTemplate_1 = require("./indexTemplate");
const app = (0, express_1.default)();
app.use('/static', express_1.default.static('./dist/client'));
app.get('/', (req, res) => {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, Header_1.Header)())));
});
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
//# sourceMappingURL=server.js.map