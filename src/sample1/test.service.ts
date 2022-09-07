import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { POSTDTO } from './test.dto'
import { TestTable } from './test.entity'

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TestTable)
    private readonly repository: Repository<TestTable>
  ) {}

  async findAll() {
    return await this.repository.find()
  }

  async insert(params: TestTable) {
    //
    const entity = this.repository.create(params)
    await this.repository.save(entity, { reload: true })
  }

  async postTest(params: POSTDTO) {
    const returnData = {
      test_data: `params value is ${params.data} and post test`,
    }
    return returnData
  }
}
