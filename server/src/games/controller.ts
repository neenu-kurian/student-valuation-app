import {JsonController, Authorized, Get, Param} from 'routing-controllers'
import {Student, Batch} from './entities'

@JsonController()
export class StudentController {

  @Authorized()
  @Get('/batches/:batchid')
  getStudents(@Param('batchid')batchid : number) {
    return Student.find({where: {
        batchid
      }})
  }

  //@Authorized()
  //@Get('/batches/students')
  //getStudents() {
  //  return Student.find()
  //}
}

@JsonController()
export class BatchController {

  @Authorized()
  @Get('/batches')
  getBatches() {
    return Batch.find()
  }
}
