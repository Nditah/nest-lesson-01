import { Timestamp } from "rxjs";

export class CreateSmsDto {
  id:string;
  sender: string;
  message: string;
  receive: string;
  dateSent: number;
  deleted?: boolean;
}

