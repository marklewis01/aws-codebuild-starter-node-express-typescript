"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const server_1 = tslib_1.__importDefault(require("./server"));
const _shared_1 = require("@shared");
const port = process.env.PORT || 3001;
server_1.default.listen(port, () => {
    _shared_1.logger.info(`Server running on port ${port}`);
});
//# sourceMappingURL=index.js.map