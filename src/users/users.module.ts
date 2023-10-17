import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./entities/user.entity";
import {HistoryActionsModule} from "../history-actions/history-actions.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User]), HistoryActionsModule],
  exports: [UsersService]
})
export class UsersModule {}
