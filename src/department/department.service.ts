import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
@Injectable()
export class DepartmentService {
  departments: Array<Department> = [];
  create(createDepartmentDto: CreateDepartmentDto) {
    const id = `${this.departments.length + 1}`;
    const newDepartment = new Department();
    const newRecord = { id, ...newDepartment, ...createDepartmentDto };
    this.departments.push(newRecord);
    return newRecord;
  }

  findAll() {
    return this.departments;
  }
  getIndex(id: string): number {
    return this.departments.findIndex((item) => item.id === id);
  }
  findTrash(): Department[] {
    return this.departments.filter((item) => item.deleted == true);
  }
  findOne(id: string) {
    return this.departments.filter((item) => item.id == id);
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    const index = this.getIndex(id);
    const record = this.departments[index];
    const update = { ...record, ...updateDepartmentDto };
    this.departments[index] = update;
    return this.departments[index];
  }
  bin(id: string) {
    const index = this.getIndex(id);
    const record = this.departments[index];
    const update = { ...record, deleted: true };
    this.departments[index] = update;
    return this.departments[index];
  }

  remove(id: string) {
    const index = this.getIndex(id);
    this.departments.splice(index, 1);
  }
}
