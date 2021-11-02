import * as http from 'http';
import * as url from 'url';
import { ParsedUrlQuery } from 'querystring';

export class RequestProcessor{
    processReq(request: http.IncomingMessage, response: http.ServerResponse): http.ServerResponse {
        // console.log(JSON.stringify(request));
        const reqUrl: string = request.url || '';
        const reqPathName: string = url.parse(reqUrl, true).pathname || '';
        const splitedUrl: string[] = reqPathName.split('api/v1/');
        const reqQueryData = url.parse(reqUrl, true).query;
        

        // Si no incluye el termino api/v1/ no lo reconoceremos como una peticion
        if(splitedUrl.length != 2 && splitedUrl[1] != ''){
            // Si no es válida, devolvemos un 400
            response.writeHead(400, {
                'Content-Type': 'application/json',
                'X-Powered-By': 'Node.js'
            });
            response.end(
                JSON.stringify({
                    success: false,
                    error: 'Bad request format',
                    message: 'Bad format in the request. You should use /api/v1/[function[?parameters...]]'
                })
            );
        } else {
            response = this.analizeRequest(splitedUrl[1], reqQueryData, response);
            
        }
        return response;
    }

    private analizeRequest(func: string, queryData: ParsedUrlQuery, response: http.ServerResponse): http.ServerResponse {
        
        switch(func){
            case 'factorial':
                // factorial function
            break;

        }
        
        response.writeHead(200, {
            'Content-Type': 'application/json',
            'X-Powered-By': 'Node.js'
        });
        response.end(
            JSON.stringify({
                success: true,
                error: null,
                message: 'Good format of the request'
            })
        );
        return response;
    }
}