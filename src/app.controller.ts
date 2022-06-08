import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hi')
  getHello1(): string {
    return this.appService.getHi();
  }

  @Get('me')
  getHello2(): string {
    return this.appService.getHello();
  }
}
