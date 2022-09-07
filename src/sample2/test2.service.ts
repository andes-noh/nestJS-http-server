import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Test2Table } from './test2.entity'

@Injectable()
export class Test2Service {
  constructor(
    @InjectRepository(Test2Table)
    private readonly repository: Repository<Test2Table>
  ) {
    //
  }

  async findAll() {
    return await this.repository.find()
  }

  async getTest() {
    const returnData = {
      data: 'this is test2!!!!! sample return data',
    }
    return returnData
  }
}
