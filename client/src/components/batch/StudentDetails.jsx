import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import {withStyles} from 'material-ui/styles';
import Card, { CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getStudentsByBatch, deleteStudent} from '../../actions/operations'
import {getUsers} from '../../actions/users'
import {Link} from 'react-router-dom'
import '../../styles/batchStyle.css'
import Delete from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  passstyle: {
    width: '50%',
    margin: 'auto',
    height: '10px',
    'margin-bottom': '10px'
  },
  button: {
    margin: theme.spacing.unit
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
  

    return (
      <div>

        <Card key={student.id} className="student-card">

          <CardContent >
            <br/>

            <Typography component="h1">
              <Link to ={`student/evaluation/${student.id}`}>{student.studentname}</Link>
            </Typography>

            <br/>
            <Typography component="h1">
              <Link to={`student/evaluation/${student.id}`}>
                <img alt="Student Pic"
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
              variant="raised"
              color="secondary"
              type="submit"
              onClick={() => this.handleClick(student.id)}
              className="delete-student">
              Delete
              <Delete/>
            </Button>
          </CardContent>

        </Card>
      </div>
    )
  }

  render() {

    const {students, users, authenticated, classes} = this.props

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
        <div className="center-card">        
        <p>Green status : {greenpercentage}%</p>
        <progress max="100" value={greenpercentage} className="greenProgressBar"></progress>
        <br/>
        <p>Red status : {redpercentage}%</p>
        <progress max="100" value={redpercentage} className="redProgressBar"></progress>
        <br/>
        <p>Yellow status : {yellowpercentage}%</p>
        <progress max="100" value={yellowpercentage} className="yellowProgressBar"></progress>
        <br/>
      </div>
        <Paper className="outer-paper">

          <div>
            {students.map(student => this.renderStudents(student))}
          </div>

          <Link to ={`/newstudent/${this.props.match.params.id}`}>
            
            <Button  color="primary"
        variant="raised"
        className="create-student">
        <AddIcon /> Add Student
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
