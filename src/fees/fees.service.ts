import { Injectable } from '@nestjs/common';
import { Course } from 'src/course/entities/course.entity';
import { CreateFeeDto } from './dto/create-fee.dto';
import { UpdateFeeDto } from './dto/update-fee.dto';

@Injectable()
export class FeesService {
  records: Array<fees> = [];

  create(data: CreateFeeDto) {
    const id = `${this.records.length + 1}`;
    const newfees = new Course();
    const newRecord = {id, ...newfees, ...data};
    this.records.push(newRecord);
    return newRecord;
  }

  getIndex(id: string): number {
    return this.records.findIndex((item) => item.id === id);
  }

  findAll(): fees[] {
    return this.records.filter((item) => !item.deleted);
  }

  findOne(): fees[] {
    return this.records.filter((item) => item.id == id)
  }

  findTrash(): fees[]{
    return this.records.filter((item) => item.deleted == true);
  }

  update(id: string, updateFeeDto: UpdateFeeDto) {
    const index = this.getIndex(id);
    const record = this.records[index];
    const update = { ...record, ...updateCourseDto };
    this.records[index] = update;
    return this.records[index];
  }

  trash(id: string){
    const index = this.getIndex(id);
    const record = this.records[index];
    const update = { ...record, deleted: true};
    this.records[index] = update;
    return this.records[index];
  }

  remove(id: string) {
    const index = this.getIndex(id);
    this.records.splice(index, 1);
  }
}
