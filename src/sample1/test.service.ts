import { Injectable } from '@nestjs/common'
import { POSTDTO } from './test.dto'

@Injectable()
export class TestService {
  constructor() {
    //
  }

  async postTest(params: POSTDTO) {
    const returnData = {
      test_data: `params value is ${params.data} and post test`,
    }
    return returnData
  }
}
