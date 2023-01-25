import { Injectable } from '@nestjs/common';

import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Loading 10 watts of Power.');
    this.powerService.supply(10);

    return a + b;
  }
}
