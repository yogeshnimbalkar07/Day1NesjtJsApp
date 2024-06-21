import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Huuuray!!! Yogesh is here hi';
  }

  getPing(): string {
    return 'Pong!';
  }
}
