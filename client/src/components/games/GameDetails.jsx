import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
//import Image from 'material-ui/Image'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getStudentsByBatch} from '../../actions/games'
import {getUsers} from '../../actions/users'
import './GameDetails.css'

class GamesDetails extends PureComponent {
  componentWillMount() {

    if (this.props.students === null) 
      this.props.getStudentsByBatch(this.props.match.params.id)
      if (this.props.users === null) this.props.getUsers()

  }
 
  renderStudents = (student) => {
    const {users, history} = this.props

    return (
      <Card key={student.id} className="student-card">
        <CardContent>

         
          <Typography component="h1">
            Name:{student.studentname}
          </Typography>
          <br/>
          <Typography component="h1">
            <img style={{maxHeight:'100px'}} src={student.studentimage}/>
          </Typography>
          <br/>
          <Typography component="h1">
            {student.evaluation}
          </Typography>
        </CardContent>
      
      </Card>
    )
  }

  render() {
    const {students,users,authenticated} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (students === null||users===null) 
      return null

    return (
      <Paper className="outer-paper">

        <div>
          {students.map(student => this.renderStudents(student))}
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  students: state.students 
})

export default connect(mapStateToProps, {getUsers,getStudentsByBatch})(GamesDetails)
