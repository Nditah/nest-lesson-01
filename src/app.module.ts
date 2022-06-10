import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { CourseModule } from './course/course.module';
import { FeesController } from './fees/fees.controller';
import { FeesModule } from './fees/fees.module';
import { FeesService } from './fees/fees.service';
import { FeesModule } from './fees/fees.module';

@Module({
  imports: [DepartmentModule, CourseModule, FeesModule],
  controllers: [AppController, FeesController],
  providers: [AppService, FeesService],
  exports: [],
})
export class AppModule {}
