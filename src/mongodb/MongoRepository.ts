import { Collection, Db, MongoClient } from "mongodb";
import { User } from "../types/types";

export class MongoRepository {
  private _client: MongoClient;
  private _dbName: string = "pruebas";
  private _db: Db;

  constructor(mongoURL: string) {
    this._client = new MongoClient(mongoURL);
    this._client
      .connect()
      .then((result) => {
        console.log(`Successfully connected to mongo on: ${mongoURL}`);
      })
      .catch((error) => {
        console.log(
          `Could not connect to mongo on: ${mongoURL}. Error ${JSON.stringify(
            error
          )}`
        );
      });
    this._db = this._client.db(this._dbName);
  }

  public findUser(userName: string) {
    const userCollection: Collection = this._db.collection("users");
    return new Promise(async (resolve, reject) => {
      try {
        const userData = await userCollection
          .find({ userName: userName })
          .toArray();
        console.log(JSON.stringify(userData));
        userData.length >= 1
          ? resolve(userData[0])
          : reject({
              message: `No hay ningún usuario con nombre ${userName}`,
              errorCode: 404,
            });
      } catch (error) {
        reject(error);
      }
    });
  }
}
