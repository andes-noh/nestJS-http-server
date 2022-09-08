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

  // Read
  async findAll() {
    return await this.repository.find()
  }

  // Creae
  async insert(params: Test2Table) {
    //
    const entity = this.repository.create(params)
    await this.repository.save(entity, { reload: true })
  }

  // Update
  async update(id: number, params: Test2Table) {
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

  async getTest() {
    const returnData = {
      data: 'this is test2!!!!! sample return data',
    }
    return returnData
  }
}
