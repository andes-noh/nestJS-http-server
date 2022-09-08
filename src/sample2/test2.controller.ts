/*
https://docs.nestjs.com/controllers#controllers
*/
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Test2Service } from './test2.service'
import { TEST2DTO } from './test2.dto'
import { Test2Table } from './test2.entity'

@ApiTags('sample2 관련 docs')
@Controller('sample2')
export class Test2Controller {
  constructor(private readonly service: Test2Service) {}

  // @ApiOperation({
  //   description: 'sample2 get 요청 테스트',
  // })
  // @ApiResponse({ type: TEST2DTO })
  // @Get()
  // async getSample2(): Promise<TEST2DTO> {
  //   return await this.service.getTest()
  // }

  @Get()
  @ApiOperation({
    description: 'test2 table get 요청 테스트',
  })
  @ApiResponse({ type: Test2Table })
  async findAll() {
    return this.service.findAll()
  }

  @Post()
  @ApiOperation({
    description: 'test2 table 데이터 저장',
  })
  @ApiBody({ type: Test2Table })
  async insert(@Body() body: Test2Table) {
    //
    this.service.insert(body)
  }

  @Patch(':id')
  @ApiOperation({
    description: 'test2 table 데이터 수정',
  })
  @ApiBody({ type: Test2Table })
  @ApiParam({ name: 'id' })
  async update(@Param('id') id: number, @Body() body: Test2Table) {
    //
    await this.service.update(id, body)
  }

  @Delete(':id')
  @ApiOperation({
    description: 'test2 table 데이터 삭제',
  })
  @ApiBody({ type: Test2Table })
  @ApiParam({ name: 'id' })
  async delete(@Param('id') id: number) {
    //
    await this.service.delete(id)
  }
}
