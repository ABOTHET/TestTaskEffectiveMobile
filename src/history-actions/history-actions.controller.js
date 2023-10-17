import {Controller, Dependencies, Get, Param} from '@nestjs/common';
import {HistoryActionsService} from "./history-actions.service";

@Controller('history-actions')
@Dependencies(HistoryActionsService)
export class HistoryActionsController {

    constructor(historyActionsService) {
        this.historyActionsService = historyActionsService;
    }

    @Get(':uuid')
    async getHistoryActionsByUserUuid(@Param('uuid') uuid) {
        const historyActions = await this.historyActionsService.getHistoryActionsByUserUuid(uuid);
        return historyActions;
    }

}
