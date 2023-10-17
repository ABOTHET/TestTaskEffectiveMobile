import {forwardRef, Inject, Injectable, Param} from '@nestjs/common';
import {UpdateUserDto} from "./dto/update-user.dto";
import {CreateUserDto} from "./dto/create-user.dto";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./entities/user.entity";
import {EmailIsBusy} from "./exceptions/email-is-busy.exception";
import {UserDoesNotExist} from "./exceptions/user-does-not-exist.exception";
import { HistoryActionsService } from "../history-actions/history-actions.service";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User, @Inject(forwardRef(() => HistoryActionsService)) private historyActionsService: HistoryActionsService) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const userFromDB: User = await this.userRepository.findOne({where: {email: createUserDto.email}});
        if (userFromDB) {
            throw new EmailIsBusy();
        }
        const user: User = await this.userRepository.create(createUserDto);
        await this.historyActionsService.createHistoryActionsCreate(user.uuid);
        return user;
    }

    async updateUser(uuid: string, updateUserDto: UpdateUserDto): Promise<User> {
        const userFromDB: User = await this.userRepository.findByPk(uuid);
        if (!userFromDB) {
            throw new UserDoesNotExist();
        }
        await this.userRepository.update(updateUserDto, {where: {uuid: uuid}});
        const updatedUser: User = await this.userRepository.findByPk(uuid);
        await this.historyActionsService.createHistoryActionsChanges(uuid, updateUserDto);
        return updatedUser;
    }

    async getUsers(): Promise<User[]> {
        const usersFromDB: User[] = await this.userRepository.findAll();
        return usersFromDB;
    }

}
