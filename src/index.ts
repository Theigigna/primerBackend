import * as http from 'http';
import { configLoader } from './config/config';
import { RequestProcessor } from './processor/ReqProcessor';
import { MongoProvider } from './mongodb/MongoProvider';

const configuration = new configLoader();
const mongoProvider = new MongoProvider(configuration.mongoURL, configuration.mongoPort);
const reqProc = new RequestProcessor();
const server = http.createServer((req, res) => {
    res = reqProc.processReq(req, res);
});
server.listen(configuration.port);
console.log(`Server iniciado en el puerto ${configuration.port}`);
