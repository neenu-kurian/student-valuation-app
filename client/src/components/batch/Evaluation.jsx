import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getBatches} from '../../actions/operations'
import {getUsers} from '../../actions/users'
import {Link} from 'react-router-dom'
import '../../styles/batchStyle.css'

class Evaluation extends PureComponent {
  
 

  

  render() {

    const studentid=Number(this.props.match.params.id)
    const selectedStudent=this
    .props
    .student
    .filter(function (student) {
        if( student.id === studentid)
        return student
    })
    
    
    return (
       <div>
        <Card  className="batch-card">
        <CardContent>

          <Typography variant="headline" component="h2">
            Name :{selectedStudent[0].studentname}
          </Typography>
          <Typography component="h1">
            Batch:{selectedStudent[0].batchid}
          </Typography>
        
          <Typography component="h1">
            <img
                style={{
                maxHeight: '100px'
                
              }}
             src={selectedStudent[0].studentimage}
                />
                </Typography>
        </CardContent>
       
      </Card>


     
    <div   className="color-red"></div>
    
    
      </div> 
     
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  student:state.students
})

export default connect(mapStateToProps)(Evaluation)
