import * as http from 'http';
import { configLoader } from './config/config';
import { requestProcessor } from './processor/reqProcessor';

const configuration = new configLoader();
const reqProc = new requestProcessor();
const server = http.createServer((req, res) => {
    res = reqProc.processReq(req, res);
});
server.listen(configuration.port);
console.log(`Server iniciado en el puerto ${configuration.port}`);
