import { Module } from '@nestjs/common';
import { HistoryActionsController } from './history-actions.controller';
import { HistoryActionsService } from "./history-actions.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {HistoryActions} from "./entities/history-actions.entity";

@Module({
  providers: [HistoryActionsService],
  controllers: [HistoryActionsController],
  imports: [SequelizeModule.forFeature([HistoryActions])],
  exports: [HistoryActionsService]
})
export class HistoryActionsModule {

}

