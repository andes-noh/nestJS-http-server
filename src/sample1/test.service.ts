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

  // Read
  async findAll() {
    return await this.repository.find()
  }

  // Create
  async insert(params: TestTable) {
    //
    const entity = this.repository.create(params)
    await this.repository.save(entity, { reload: true })
  }

  // Update
  async update(id: number, params: TestTable) {
    //
    const entity = await this.repository.findOneByOrFail({ id })
    Object.assign(entity, params)
    await this.repository.save(entity)
  }

  // Delete
  async delete(id: number) {
    //
    await this.repository.delete({ id })
  }

  async postTest(params: POSTDTO) {
    const returnData = {
      test_data: `params value is ${params.data} and post test`,
    }
    return returnData
  }
}
