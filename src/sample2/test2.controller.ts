/*
https://docs.nestjs.com/controllers#controllers
*/
import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Test2Service } from './test2.service'
import { TEST2DTO } from './test2.dto'

@ApiTags('sample2 관련 docs')
@Controller('sample2')
export class Test2Controller {
  constructor(private readonly service: Test2Service) {}
  @ApiOperation({
    description: 'sample2 get 요청 테스트',
  })
  @ApiResponse({ type: TEST2DTO })
  @Get()
  async getSample2(): Promise<TEST2DTO> {
    return await this.service.getTest()
  }
}
