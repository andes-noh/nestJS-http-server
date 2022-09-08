/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { TestService } from './test.service'
import { TESTDTO, POSTDTO } from './test.dto'
import { TestTable } from './test.entity'

@ApiTags('sample 관련 docs')
@Controller('sample')
export class Testcontroller {
  //
  constructor(private readonly service: TestService) {}
  // @Post()
  // @ApiOperation({
  //   description: 'sample post 요청 테스트',
  // })
  // @ApiResponse({ type: TESTDTO })
  // @ApiBody({ type: POSTDTO })
  // async postSample(@Body() body: POSTDTO): Promise<TESTDTO> {
  //   //
  //   return this.service.postTest(body)
  // }

  @Get()
  @ApiOperation({
    description: 'test table get 요청 테스트',
  })
  @ApiResponse({ type: TestTable })
  async findAll() {
    return this.service.findAll()
  }

  @Post()
  @ApiOperation({
    description: 'test table 데이터 저장',
  })
  @ApiBody({ type: TestTable })
  async insert(@Body() body: TestTable) {
    //
    this.service.insert(body)
  }

  @Patch(':id')
  @ApiOperation({
    description: 'test table 데이터 수정',
  })
  @ApiBody({ type: TestTable })
  @ApiParam({ name: 'id' })
  async update(@Param('id') id: number, @Body() body: TestTable) {
    //
    await this.service.update(id, body)
  }

  @Delete(':id')
  @ApiOperation({
    description: 'test table 데이터 삭제',
  })
  @ApiBody({ type: TestTable })
  @ApiParam({ name: 'id' })
  async delete(@Param('id') id: number) {
    //
    await this.service.delete(id)
  }
}
