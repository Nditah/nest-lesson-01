import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '\nPeace Be with you!\n';
  }

  getHi(): string {
    return '\nHi on drugs!\n';
  }
}
