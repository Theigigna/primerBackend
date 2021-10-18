"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestProcessor = void 0;
var url = require("url");
var requestProcessor = /** @class */ (function () {
    function requestProcessor() {
    }
    requestProcessor.prototype.processReq = function (request, response) {
        // console.log(JSON.stringify(request));
        var reqUrl = request.url;
        var reqPathName = url.parse(reqUrl, true).pathname;
        var splitedUrl = reqPathName.split('api/v1/');
        var reqQueryData = url.parse(reqUrl, true).query;
        // Si no incluye el termino api/v1/ no lo reconoceremos como una peticion
        if (splitedUrl.length != 2 && splitedUrl[1] != '') {
            // Si no es válida, devolvemos un 400
            response.writeHead(400, {
                'Content-Type': 'application/json',
                'X-Powered-By': 'Node.js'
            });
            response.end(JSON.stringify({
                success: false,
                error: 'Bad request format',
                message: 'Bad format in the request. You should use /api/v1/[function[?parameters...]]'
            }));
        }
        else {
            response.writeHead(200, {
                'Content-Type': 'application/json',
                'X-Powered-By': 'Node.js'
            });
            response.end(JSON.stringify({
                success: true,
                error: null,
                message: 'Good format of the request',
                pathName: reqPathName,
                queryData: reqQueryData
            }));
        }
        return response;
    };
    return requestProcessor;
}());
exports.requestProcessor = requestProcessor;
