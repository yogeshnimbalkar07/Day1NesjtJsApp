import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! final';
  }

  getPing(): string {
    return 'Pong!';
  }
}
