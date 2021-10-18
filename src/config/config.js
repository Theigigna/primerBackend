"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configLoader = void 0;
var CONFIG_DEFAULT_PORT = '5000';
var CONFIG_PORT = process.env.CONFIG_PORT || CONFIG_DEFAULT_PORT;
var configLoader = /** @class */ (function () {
    function configLoader() {
        this._port = Number(CONFIG_PORT);
    }
    Object.defineProperty(configLoader.prototype, "port", {
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    return configLoader;
}());
exports.configLoader = configLoader;
