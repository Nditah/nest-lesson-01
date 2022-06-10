import { Timestamp } from "rxjs";

export class Sms {
    id: string;
    sender: string;
    message: string;
    receive: string;
    dateSent?: Date;
    deleted?: boolean;


constructor() {
    this.dateSent = new Date();
    this.deleted = false;
  }

}