import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {LinearProgress} from 'material-ui/Progress';
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getStudentsByBatch, deleteStudent} from '../../actions/operations'
import {getUsers} from '../../actions/users'
import {Link} from 'react-router-dom'
import '../../styles/batchStyle.css'

const styles = theme => ({
  passstyle: {
    width: '50%',
    margin: 'auto',
    height: '10px',
    'margin-bottom': '10px'
  }
})

class StudentDetails extends PureComponent {
  constructor() {
    super()
    this.handleClick = this
      .handleClick
      .bind(this)
  }

  componentWillMount() {

    this
      .props
      .getStudentsByBatch(this.props.match.params.id)
    if (this.props.users === null) 
      this.props.getUsers()

  }

  handleClick(id) {
   
    this
      .props
      .deleteStudent(id)

  }

  renderStudents = (student) => {
    console.log('inside renderstudents')
    const {users, history} = this.props

    return (
      <div>

        <Card key={student.id} className="student-card">

          <CardContent >
            <br/>

            <Typography component="h1">
              <Link to ={`student/evaluation/${student.id}`}>Name:{student.studentname}</Link>
            </Typography>

            <br/>
            <Typography component="h1">
              <Link to={`student/evaluation/${student.id}`}>
                <img
                  style={{
                  maxHeight: '100px'
                }}
                  src={student.studentimage}/></Link>
            </Typography>

            <br/>
            <Typography component="h1">
              {student.evaluation}
            </Typography>

            <br/>
            <Button
              color="primary"
              variant="raised"
              type="submit"
              onClick={() => this.handleClick(student.id)}
              className="delete-student">Delete</Button>

          </CardContent>

        </Card>
      </div>
    )
  }

  render() {

    const {students, users, authenticated, classes} = this.props

    console.log('inside render')
    if (!authenticated) 
      return (<Redirect to="/login"/>)

    if (students === null || users === null) 
      return null

    const totallength = students.filter(function (student) {
      return student
    })
      .length

    const greenlength = students.filter(function (student) {
      return student.evaluation === 'green'
    })
      .length

    const yellowlength = students.filter(function (student) {
      return student.evaluation === 'yellow'
    })
      .length

    const redlength = students.filter(function (student) {
      return student.evaluation === 'red'
    }).length

    const greenpercentage = (totallength > 0)
      ? (((greenlength / totallength) * 100).toFixed(2))
      : 0
    const yellowpercentage = (totallength > 0)
      ? (((yellowlength / totallength) * 100).toFixed(2))
      : 0
    const redpercentage = (totallength > 0)
      ? (((redlength / totallength) * 100).toFixed(2))
      : 0

    return (

      <div>

        <p>GREEN:{greenpercentage}%</p>
        <progress max="100" value={greenpercentage} className="greenProgressBar"></progress>
        <br/>
        <p>RED:{redpercentage}%</p>
        <progress max="100" value={redpercentage} className="redProgressBar"></progress>
        <br/>
        <p>YELLOW:{yellowpercentage}%</p>
        <progress max="100" value={yellowpercentage} className="yellowProgressBar"></progress>
        <br/>

        <Paper className="outer-paper">

          <div>
            {students.map(student => this.renderStudents(student))}
          </div>

          <Link to ={`/newstudent/${this.props.match.params.id}`}>
            <Button
              color="primary"
              variant="raised"
              type="submit"
              className="create-student">
              Add Student
            </Button>
          </Link>

          <Link to ={`/students/randomstudent/${this.props.match.params.id}`}>
            <Button color="primary" variant="raised" type="submit" className="ask-question">
              Ask A Question
            </Button>
          </Link>

        </Paper>
      </div>
    )

  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  users: state.users === null
    ? null
    : state.users,
  student: state.students && state.students[props.match.params.id],
  students: state.students
})

export default withStyles(styles)(connect(mapStateToProps, {getUsers, getStudentsByBatch, deleteStudent})(StudentDetails))
