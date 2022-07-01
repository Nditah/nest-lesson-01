import { Module } from '@nestjs/common';
import { MailerModule } from "@nestjs-modules/mailer";
import { TwilioModule } from 'nestjs-twilio';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { CourseModule } from './course/course.module';
import { EmailModule } from './email/email.module';
import { SmsModule } from './sms/sms.module';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [
    DepartmentModule, 
    CourseModule,
    EmailModule,
    MailerModule.forRoot({
      transport: {
        host: 'stmp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'charlesmir04@gmail.com',
            pass: 'tdkzckhpphffobhr'
        }
      }
  }),
  SmsModule,
  TwilioModule.forRoot({
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
}),
  FileUploadModule

  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
