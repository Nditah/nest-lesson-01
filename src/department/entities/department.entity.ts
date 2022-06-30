export class Department {
    id : string;
    name: string;
    courses: number;
    code: string;
    head:string;
    faculty : string;
    createdAt?: Date;
    deleted?: boolean;
    constructor() {
        this.createdAt = new Date();
        this.deleted = false;
      }
}
