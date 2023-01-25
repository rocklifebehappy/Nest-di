import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supply(power: number) {
    console.log(`Supplying ${power} watts of power!`);
  }
}
