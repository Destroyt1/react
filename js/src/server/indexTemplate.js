"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
const indexTemplate = (content) => `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reddit</title>
    <script src="/static/client.js" type="application/javascript"></script>
</head>
<body>
    <div id="react_rot">${content}</div>
</body>
</html>
`;
exports.indexTemplate = indexTemplate;
//# sourceMappingURL=indexTemplate.js.map