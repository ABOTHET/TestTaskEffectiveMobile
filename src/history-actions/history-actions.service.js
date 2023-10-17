import {Dependencies, Injectable} from '@nestjs/common';
import {CreateHistoryActionsDto} from "./dto/create-history-actions.dto";
import {actionsEnum} from "./enums/actions.enum";
import {getModelToken, InjectModel} from "@nestjs/sequelize";
import {HistoryActions} from "./entities/history-actions.entity";

@Injectable()
@Dependencies(getModelToken(HistoryActions))
export class HistoryActionsService {

    constructor(historyActionsRepository) {
        this.historyActionsRepository = historyActionsRepository;
    }

    async getHistoryActionsByUserUuid(uuid) {
        const historyActions = await this.historyActionsRepository.findAll({where: {userUuid: uuid}});
        return historyActions;
    }

    async createHistoryActionsChanges(uuid, createHistoryActionsDto) {
        const changes = this.findChanges(createHistoryActionsDto);
        const createHistoryActions = new CreateHistoryActionsDto(uuid, changes);
        const actions = await this.historyActionsRepository.create(createHistoryActions);
        return actions;
    }

    async createHistoryActionsCreate(uuid) {
        let data = "был создан"
        const createHistoryActions = new CreateHistoryActionsDto(uuid, data);
        const actions = await this.historyActionsRepository.create(createHistoryActions);
        return actions;
    }

    findChanges(updateUserDto) {
        let changes = `изменил`;
        for (const property in updateUserDto) {
            for (const action in actionsEnum) {
                if (property === action) {
                    changes += ` ${actionsEnum[action]} на ${updateUserDto[property]},`;
                    break;
                }
            }
        }
        changes = changes.slice(0,-1);
        return changes;
    }

}