import {JsonController, Authorized, Get} from 'routing-controllers'
import {Student,Batch} from './entities'

@JsonController()
export  class StudentController {

  @Authorized()
  @Get('/batches/students')
  getStudents() {
    return Student.find()
  }
}

@JsonController()
export  class BatchController {

  @Authorized()
  @Get('/batches')
  getBatches() {
    return Batch.find()
  }
}

