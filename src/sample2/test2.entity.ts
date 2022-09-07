import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity('TEST2 TABLE')
export class Test2Table {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number

  @ApiProperty()
  @Column({ comment: '이름', length: 100 })
  name?: string

  @ApiProperty()
  @Column({ comment: '전화번호', length: 100 })
  phone?: string

  @ApiProperty()
  @Column({ comment: '주소', length: 100 })
  address?: string

  @ApiProperty()
  @Column({ comment: '성별', length: 100 })
  gender?: string

  @ApiProperty()
  @CreateDateColumn()
  created_at!: Date

  @ApiProperty()
  @UpdateDateColumn()
  updated_at!: Date
}
