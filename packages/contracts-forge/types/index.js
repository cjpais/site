"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag__factory = exports.Page__factory = exports.Log__factory = exports.Comment__factory = exports.factories = void 0;
exports.factories = __importStar(require("./factories"));
var Comment__factory_1 = require("./factories/Comment__factory");
Object.defineProperty(exports, "Comment__factory", { enumerable: true, get: function () { return Comment__factory_1.Comment__factory; } });
var Log__factory_1 = require("./factories/Log__factory");
Object.defineProperty(exports, "Log__factory", { enumerable: true, get: function () { return Log__factory_1.Log__factory; } });
var Page__factory_1 = require("./factories/Page__factory");
Object.defineProperty(exports, "Page__factory", { enumerable: true, get: function () { return Page__factory_1.Page__factory; } });
var Tag__factory_1 = require("./factories/Tag__factory");
Object.defineProperty(exports, "Tag__factory", { enumerable: true, get: function () { return Tag__factory_1.Tag__factory; } });
