import { Injectable } from '@nestjs/common';

export interface IUser {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  private users: IUser[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];

  findAll(): IUser[] {
    return this.users;
  }

  findById(id: number): IUser {
    return this.users.find((user) => user.id === id);
  }
}
