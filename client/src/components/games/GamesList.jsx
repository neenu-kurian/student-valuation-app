import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getBatches} from '../../actions/games'
import './GamesList.css'

class GamesList extends PureComponent {
  componentWillMount() {
    
      if (this.props.batches === null) this.props.getBatches()
     
    }
  

  renderBatch = (batch) => {
    

    return (<Card key={batch.id} className="batch-card">
      <CardContent>
       
        <Typography variant="headline" component="h2">
          Batch #{batch.id}
        </Typography>
       
      </CardContent>

    </Card>)
  }

  render() {
    const {batches} = this.props

    if (batches === null ) return null

    return (<Paper className="outer-paper">
     

      <div>
        {batches.map(batch => this.renderBatch(batch))}
      </div>
    </Paper>)
  }
}

const mapStateToProps = state => ({
  
  batches:state.batches
})

export default connect(mapStateToProps, {getBatches})(GamesList)
