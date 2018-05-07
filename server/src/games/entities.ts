import { BaseEntity, PrimaryGeneratedColumn, Column, Entity} from 'typeorm'

@Entity()
export class Student extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('int')
  batchid:number

  @Column('text')
  batchname:String

  @Column('text')
  studentimage:String

  @Column('text')
  studentname:String

  @Column('text')
  evaluation:String
}
