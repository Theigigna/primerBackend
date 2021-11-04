export interface User {
  userName: string;
  password: string;
  name: string;
  surname: string;
  permission: permission;
}

enum permission {
  root = "root",
  user = "user",
}

export interface Error {
  message: string;
  errorCode: number;
}
