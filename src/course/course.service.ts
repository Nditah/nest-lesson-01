import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  records: Array<Course> = [];

  create(data: CreateCourseDto) {
    const id = `${this.records.length + 1}`;
    const newCourse = new Course();
    const newRecord = { id, ...newCourse, ...data };
    this.records.push(newRecord);
    return newRecord;
  }

  getIndex(id: string): number {
    return this.records.findIndex((item) => item.id === id);
  }

  findAll(): Course[] {
    return this.records.filter((item) => !item.deleted);
  }

  findTrash(): Course[] {
    return this.records.filter((item) => item.deleted == true);
  }

  findOne(id: string) {
    return this.records.filter((item) => item.id == id);
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    const index = this.getIndex(id);
    const record = this.records[index];
    const update = { ...record, ...updateCourseDto };
    this.records[index] = update;
    return this.records[index];
  }

  trash(id: string) {
    const index = this.getIndex(id);
    const record = this.records[index];
    const update = { ...record, deleted: true };
    this.records[index] = update;
    return this.records[index];
  }

  remove(id: string) {
    const index = this.getIndex(id);
    this.records.splice(index, 1);
  }
}
