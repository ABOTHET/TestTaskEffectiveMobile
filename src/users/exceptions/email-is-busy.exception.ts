import {HttpException, HttpStatus} from "@nestjs/common";

export class EmailIsBusy extends HttpException {
    constructor() {
        super('Этот email занят', HttpStatus.BAD_REQUEST);
    }

}