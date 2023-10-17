export class CreateHistoryActionsDto {

    userUuid;
    action;

    constructor(userUuid, action) {
        this.userUuid = userUuid;
        this.action = action;
    }

}