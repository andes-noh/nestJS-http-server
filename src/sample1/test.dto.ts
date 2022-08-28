import { ApiProperty } from '@nestjs/swagger'

export class TESTDTO {
  @ApiProperty() test_data!: string
}

export class POSTDTO {
  @ApiProperty() data!: string
}
