import { ApiProperty } from '@nestjs/swagger'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('TEST TABLE')
export class TestTable {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number

  @ApiProperty()
  @Column({ comment: '이름', length: 100 })
  name?: string

  @ApiProperty()
  @Column({ comment: '가격', length: 100 })
  price?: string

  @ApiProperty()
  @Column({ comment: '대분류', length: 100 })
  category_main?: string

  @ApiProperty()
  @Column({ comment: '소분류', length: 100 })
  category_sub?: string

  @ApiProperty()
  @CreateDateColumn()
  created_at!: Date

  @ApiProperty()
  @UpdateDateColumn()
  updated_at!: Date
}
