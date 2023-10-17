import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {UsersService} from "./users.service";
import {User} from "./entities/user.entity";
import {HistoryActionsService} from "../history-actions/history-actions.service";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {

    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        const user: User = await this.usersService.createUser(createUserDto);
        return user;
    }

    @Patch(':uuid')
    async updateUser(@Param('uuid') uuid: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        const user: User = await this.usersService.updateUser(uuid, updateUserDto);
        return user;
    }

    @Get()
    async getUsers(): Promise<User[]> {
        const users: User[] = await this.usersService.getUsers();
        return users;
    }

}
