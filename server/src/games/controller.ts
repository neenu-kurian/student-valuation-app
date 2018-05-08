import {JsonController, Authorized, Get, Param,Post,HttpCode,CurrentUser,Body} from 'routing-controllers'
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
   
  
 
}

@JsonController()
export class BatchController {

  @Authorized()
  @Get('/batches')
  getBatches() {
    return Batch.find()
  }

  @Authorized()
  @Post('/batches/newbatch')
  @HttpCode(201)
  async createBatch(
  
    @Body() batch:Batch
  ) {
    const entity = await batch.save()
    return entity
    
  }
}
