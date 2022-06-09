import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Faculty } from './entities/faculty.entity';

@Injectable()
export class FacultyService {

    records: Array<Faculty> = [];

create(data: CreateFacultyDto) {
      const id = `${this.records.length + 1}`;
      const newFaculty = new Faculty();
      const newDepartment = { id, ...newFaculty, ...data };
      this.records.push(newDepartment);
      return newDepartment;
    }
  
    getIndex(id: string): number {
      return this.records.findIndex((item) => item.id === id);
    }
  
    findAll(): Faculty[] {
      return this.records.filter((item) => !item.deleted);
    }
  
    findTrash(): Faculty[] {
      return this.records.filter((item) => item.deleted == true);
    }
  
    findOne(id: string) {
      return this.records.filter((item) => item.id == id);
    }
  update(id: number, updateFacultyDto: UpdateFacultyDto) {
    return `This action updates a #${id} faculty`;
  }

  remove(id: number) {
    return `This action removes a #${id} faculty`;
  }
}
