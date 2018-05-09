import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getStudentsByBatch} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {Link} from 'react-router-dom'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import './GameDetails.css'

const styles = theme => ({
  passstyle: {
    width: '50%',
    margin: 'auto',
    height: '10px',
    'margin-bottom': '10px'
  }
})


class GamesDetails extends PureComponent {
  constructor(){
    super()
    
  }

  componentWillMount() {
    
    this
      .props
      .getStudentsByBatch(this.props.match.params.id)
    if (this.props.users === null) 
      this.props.getUsers()

     
  }
  

  renderStudents = (student) => {
    console.log('inside renderstudents')
    const {users, history} = this.props
    
        
    

    return (
      <div>

     
      <Card key={student.id} className="student-card">

        <CardContent>

          <Typography component="h1">
            Name:{student.studentname}
          </Typography>
          <br/>
          <Typography component="h1">
            <img
              style={{
              maxHeight: '100px'
            }}
              src={student.studentimage}/>
          </Typography>
          <br/>
          <Typography component="h1">
            {student.evaluation}
          </Typography>
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

    return (
      <div>
      <LinearProgress variant="determinate" value="10" className={classes.passstyle}/>      
      <Paper className="outer-paper">
      

        <div>
          {students.map(student => this.renderStudents(student))}
        </div>
        
       
       <Link to ={`/newstudent/${this.props.match.params.id}`}> <Button
        color="primary"
        variant="raised"
        type="submit"
        className="create-student"
        
      > Add Student </Button></Link>
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

export default withStyles(styles)(connect(mapStateToProps, {getUsers, getStudentsByBatch})(GamesDetails))
