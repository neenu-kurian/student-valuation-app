import {JsonController, Authorized, Get, Param,Post,HttpCode,CurrentUser,Body,Delete,NotFoundError} from 'routing-controllers'
import {Student, Batch} from './entities'
import User from '../users/entity'

@JsonController()
export class StudentController {

  @Authorized()
  @Get('/batches/:batchid')
  getStudents(@Param('batchid')batchid : number) {
    return Student.find({where: {
        batchid
      }})
  }
   
  @Authorized()
  @Post('/batches/newstudent/:batchid')
  @HttpCode(201)
  async createStudent(
  
    @Body() student:Student
  ) {
    const entity = await student.save()
    return entity
    
  }
  
  @Authorized()
  @Delete('/batches/students/:id')
    async deleteStudent(
        @Param('id') id: number
    ) {
        const student = await Student.findOneById(id)

        if (!student) throw new NotFoundError('Student doesn\'t exist')

        if (student) Student.removeById(id)
        return 'successfully deleted'
    }
}

 
}

@JsonController()
export class BatchController {

  @Authorized()
  @Get('/batches')
  getBatches() {
    return Batch.find()
  }

  @Authorized()
  @Post('/batches/students/newbatch')
  @HttpCode(201)
  async createBatch(
  
    @Body() batch:Batch
  ) {
    const entity = await batch.save()
    return entity
    
  }
}
