"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var config_1 = require("./config/config");
var reqProcessor_1 = require("./processor/reqProcessor");
var configuration = new config_1.configLoader();
var reqProc = new reqProcessor_1.requestProcessor();
var server = http.createServer(function (req, res) {
    res = reqProc.processReq(req, res);
});
server.listen(configuration.port);
console.log("Server iniciado en el puerto " + configuration.port);
