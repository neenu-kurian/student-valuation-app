import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getBatches} from '../../actions/games'
import {getUsers} from '../../actions/users'
import './GamesList.css'

class GamesList extends PureComponent {
  componentWillMount() {

    if (this.props.batches === null) 
      this.props.getBatches()
      if (this.props.users === null) this.props.getUsers()

  }

  renderBatch = (batch) => {
    const {users, history} = this.props

    return (
      <Card key={batch.id} className="batch-card">
        <CardContent>

          <Typography variant="headline" component="h2">
            Batch #{batch.id}
          </Typography>
          <Typography component="h1">
            Start Date:{batch.startdate}
          </Typography>
          <br/>
          <Typography component="h1">
            End Date:{batch.enddate}
          </Typography>
        </CardContent>
        <CardActions>
        <Button
          size="small"
          onClick={() => history.push(`/batches/${batch.id}`)}
        >
          VIEW STUDENTS
        </Button>
      </CardActions>
      </Card>
    )
  }

  render() {
    const {batches,users,authenticated} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (batches === null||users===null) 
      return null

    return (
      <Paper className="outer-paper">

        <div>
          {batches.map(batch => this.renderBatch(batch))}
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  batches: state.batches==null?
  null : Object.values(state.batches).sort((a, b) => b.id - a.id)
})

export default connect(mapStateToProps, {getBatches,getUsers})(GamesList)
