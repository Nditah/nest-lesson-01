import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { CourseModule } from './course/course.module';
import { FacultyModule } from './faculty/faculty.module';
import { SmsModule } from './sms/sms.module';

@Module({
  imports: [DepartmentModule, CourseModule, FacultyModule, SmsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
