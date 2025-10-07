import { Controller, Get, Param } from '@nestjs/common';
import { UserService, IUser } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): IUser[] {
    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    const user = this.userService.findById(Number(id));
    if (!user) {
      return {
        status: 'success',
        message: `User with ID ${id} not found`,
        data: null,
      };
    }

    return {
      status: 'success',
      message: 'User found',
      data: user,
    };
  }
}
