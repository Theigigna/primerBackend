import { MongoRepository } from "./MongoRepository";
import { User, Error } from "../types/types";

export class MongoProvider {
  private _mongoURL: string;
  private _repository: MongoRepository;

  constructor(url: string, port: number) {
    this._mongoURL = `mongodb://${url}:${port}`;
    console.log(`trying to create MongoRepository with ${this._mongoURL} URL`);
    this._repository = new MongoRepository(this._mongoURL);
  }

  // public addNewUser(user: User): number {

  // }

  public findUser(userName: string): User | Error {
    if (userName != "") {
      const users = this._repository.findUser(userName);
      return users;
    } else {
      return {
        message: "El campo userName no puede ser vacio",
        errorCode: 400,
      };
    }
  }
}
