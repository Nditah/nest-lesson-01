import { Injectable } from '@nestjs/common';
import { CreateSmsDto } from './dto/create-sm.dto';
import { UpdateSmsDto } from './dto/update-sm.dto';
import { Sms } from './entities/sm.entity';

@Injectable()
export class SmsService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
   records: Array<CreateSmsDto> = [];
  

  create(data: CreateSmsDto) {
    const id = `${this.records.length + 1}`;
    const newSms = new Sms();
    const newRecord = { id, ...newSms, ...data };
    this.records.push(newRecord);
    return newRecord;
  }

  getIndex(id: string): number {
    return this.records.findIndex((item) => item.id === id);
  }

  findAll(): CreateSmsDto[] {
    return this.records.filter((item: CreateSmsDto) => !item.deleted );
  }

  findTrash(): CreateSmsDto[] {
    return this.records.filter((item) => item.deleted == true);
  }
  
  findOne(id: string) {
    return this.records.filter((item) => item.id == id);
  }

  update(id: string, updateSmsDto: UpdateSmsDto) {
    const index = this.getIndex(id);
    const record = this.records[index];
    const update = { ...record, ...updateSmsDto };
    this.records[index] = update;
    return this.records[index];
  }
}

  