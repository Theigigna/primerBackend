import { Collection, Db, MongoClient } from 'mongodb';
import { User } from '../types/types';

export class MongoRepository{

    private _client: MongoClient;
    private _dbName: string = 'pruebas';
    private _db: Db;

    constructor(mongoURL: string){
        this._client = new MongoClient(mongoURL);
        this._client.connect();
        this._db = this._client.db(this._dbName);
    }

    public findUser(userName: string): any {
        const userCollection: Collection = this._db.collection('users');
        const userData = userCollection.find({ userName: userName}).toArray();
        console.log(JSON.stringify(userData));
        return userData;
    }


}