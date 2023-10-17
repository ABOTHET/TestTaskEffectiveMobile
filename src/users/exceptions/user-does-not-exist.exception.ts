import {HttpException, HttpStatus} from "@nestjs/common";

export class UserDoesNotExist extends HttpException {
    constructor() {
        super('Пользователя не существует', HttpStatus.BAD_REQUEST);
    }

}