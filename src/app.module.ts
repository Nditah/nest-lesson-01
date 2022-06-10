import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { CourseModule } from './course/course.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [DepartmentModule, CourseModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
