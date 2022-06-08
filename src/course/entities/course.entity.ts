export class Course {
  id: string;
  name: string;
  description: string;
  code: string;
  unit: number;
  level: number;
  createdAt?: Date;
  deleted?: boolean;

  constructor() {
    this.createdAt = new Date();
    this.deleted = false;
  }
}
