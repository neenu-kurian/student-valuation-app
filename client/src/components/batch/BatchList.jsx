import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, {CardHeader, CardActions, CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getBatches} from '../../actions/operations'
import {getUsers} from '../../actions/users'
import {Link} from 'react-router-dom'
import NewBatch from './NewBatch'
import '../../styles/batchStyle.css'
import Avatar from 'material-ui/Avatar';
import AddIcon from '@material-ui/icons/Add';
import Icon from 'material-ui/Icon';

class BatchList extends PureComponent {
  componentWillMount() {

    if (this.props.batches === null) 
      this.props.getBatches()
    if (this.props.users === null) 
      this.props.getUsers()

  }

  renderBatch = (batch) => {
    const {users, history} = this.props

    return (
      <Card key={batch.id} className="center-card">
        <CardContent>

          <Typography variant="headline" component="h2">
            Batch #{batch.batchid}
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
        <Button size="small" color="primary" onClick={() => history.push(`/batches/${batch.batchid}`)}>
            View Students
          </Button>

      </CardActions>

      </Card>
    )
  }

  render() {
    const {batches, users, authenticated} = this.props

    if (!authenticated) 
      return (<Redirect to="/login"/>)

    if (batches === null || users === null) 
      return null

    return (

      <Paper className="outer-paper">

        <div>
          {batches.map(batch => this.renderBatch(batch))}
        </div>
        <Link to ="/batches/students/newbatch" >
      <Button variant="fab" color="primary"
        variant="raised"
        className="create-batch" type="submit">
        <AddIcon /> Create new batch
      </Button>
      </Link>
      </Paper>

    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null
    ? null
    : state.users,
  batches: state.batches == null
    ? null
    : Object
      .values(state.batches)
      .sort((a, b) => b.id - a.id)
})

export default connect(mapStateToProps, {getBatches, getUsers})(BatchList)
