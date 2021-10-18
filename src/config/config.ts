
const CONFIG_DEFAULT_PORT: string = '5000';
const CONFIG_PORT = process.env.CONFIG_PORT || CONFIG_DEFAULT_PORT;

export class configLoader{
    private _port: number;
    constructor(){
        this._port = Number(CONFIG_PORT);
    }
    get port(): number {
        return this._port;
    }
}