import { Injectable } from '@nestjs/common'

@Injectable()
export class Test2Service {
  constructor() {
    //
  }

  async getTest() {
    const returnData = {
      data: 'this is test2!!!!! sample return data',
    }
    return returnData
  }
}
