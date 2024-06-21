import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! final yogi';
  }

  getPing(): string {
    return 'Pong!';
  }
}
