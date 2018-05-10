import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import {createBatch} from '../../actions/operations'
import {Link} from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';


const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    }
  });
class NewBatch extends PureComponent {
    constructor() {
        super()
        this.handleChange = this
            .handleChange
            .bind(this)
        this.handleSubmit = this
            .handleSubmit
            .bind(this)
    }

    handleSubmit = (e) => {
        this
            .props
            .createBatch(this.state)
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    render () {
        const  {classes} = this.props
       
        return (
            <div>
            <Card className="center-card">
                <CardContent>
                    <form className="batch-form">

                            <TextField
          id="number"
          label="Required"
          name="batchid"
          placeholder="Batch Number"
          required
          onChange={ this.handleChange }
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="number"
          placeholder="Batch Name"
          name="batchname"
          required
          onChange={ this.handleChange }
          type="text"
          className={classes.textField}
          margin="normal"
        />

   <TextField
        id="startdate"
        label="Start Date"
        required
        name="startdate" 
        className={classes.textField}
        onChange={this.handleChange}
      />
         <TextField
        id="enddate"
        label="End Date"
        required
        name="enddate" 
        className={classes.textField}
        onChange={this.handleChange}
      />

                    <CardActions>
                        <Link to ="/batches"><Button  variant="raised" color="primary" className="submit-action" onClick={this.handleSubmit} 
                        style={{ textAlign: '' }}
                        > Submit </Button></Link>
                    </CardActions>
                    </form>

                </CardContent>
            </Card>
</div>
        )
    }
}

export default withStyles(styles)(connect(null,{createBatch})(NewBatch))
