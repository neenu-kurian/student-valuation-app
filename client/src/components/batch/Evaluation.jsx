import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getBatches} from '../../actions/operations'
import {getUsers} from '../../actions/users'
import {Link} from 'react-router-dom'
import {PostLink} from 'react-post'
import '../../styles/batchStyle.css'
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

class Evaluation extends PureComponent {

  handleClick(color) {

    console.log(color)

  }

  render() {

    const studentid = Number(this.props.match.params.id)
    const selectedStudent = this
      .props
      .student
      .filter(function (student) {
        if (student.id === studentid) 
          return student
      })

    return (
      <div>
        <Card className="batch-card">
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
                src={selectedStudent[0].studentimage}/>
            </Typography>
          </CardContent>
          <CardActions>
            <div className="redButton" onClick={() => this.handleClick("red")}/>
            <br/>
            <div className="yellowButton" onClick={() => this.handleClick("yellow")}/>
            <br/>
            <div className="greenButton" onClick={() => this.handleClick("green")}/>
          </CardActions>
          <br/>

          <div>Daily evaluation for:</div>
          <TextField
            id="evaluationdate"
            type="date"
            required
            InputLabelProps={{
            shrink: true
          }}/>

          <br/>
          <div>Comments:</div>
          <br/>
          <textarea
            type="text"
            placeholder="Comments"
            className="comment-field"
            onChange={this.handleChange}/>
        
        <Button
                    color="primary"
                    variant="raised"
                    type="submit"
                    onClick={this.handleClick}
                    className="save-valuation">Save</Button>
       <Button
                    color="primary"
                    variant="raised"
                    type="submit"
                    onClick={this.handleClick}
                    className="next-student">Save and Next</Button>
        </Card>
        

      </div>

    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null
    ? null
    : state.users,
  student: state.students
})

export default connect(mapStateToProps)(Evaluation)
