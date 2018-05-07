import {JsonController, Authorized, Get} from 'routing-controllers'
import {Student} from './entities'

@JsonController()
export default class StudentController {

  @Authorized()
  @Get('/games')
  getGames() {
    return Student.find()
  }
}
