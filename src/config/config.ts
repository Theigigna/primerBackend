
const CONFIG_DEFAULT_PORT: string = '5000';
const CONFIG_DEFAULT_MONGO_PORT: string = '27017';
const CONFIG_DEFAULT_MONGO_URL: string = 'localhost';

const CONFIG_PORT = process.env.CONFIG_PORT || CONFIG_DEFAULT_PORT;
const CONFIG_MONGO_PORT = process.env.CONFIG_MONGO_PORT || CONFIG_DEFAULT_MONGO_PORT;
const CONFIG_MONGO_URL = process.env.CONFIG_MONGO_URL || CONFIG_DEFAULT_MONGO_URL;

export class configLoader{
    private _port: number;
    private _mongoPort: number;
    private _mongoURL: string;
    
    constructor(){
        this._port = Number(CONFIG_PORT);
        this._mongoPort = Number(CONFIG_MONGO_PORT);
        this._mongoURL = CONFIG_MONGO_URL;
    }
    get port(): number {
        return this._port;
    }
    get mongoPort(): number {
        return this._mongoPort;
    }
    get mongoURL(): string {
        return this._mongoURL;
    }
}