import { BaseEntity, PrimaryGeneratedColumn, Column, Entity} from 'typeorm'

@Entity()
export class Student extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('int')
  batchid:number
  
  @Column('text')
  studentimage:String

  @Column('text')
  studentname:String

  @Column('text',{nullable:true})
  evaluation?:String

  @Column('json',{nullable:true})
  evaluationdetails?:String[]
}


@Entity()
export class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('int')
  batchid:number

  @Column('text')
  batchname:String

  @Column('date')
  startdate:Date

  @Column('date')
  enddate:Date
}
