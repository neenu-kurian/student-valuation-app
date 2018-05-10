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
        console.log("inside newbatch")
        super()
        this.handleChange = this
            .handleChange
            .bind(this)
        this.handleSubmit = this
            .handleSubmit
            .bind(this)
    }

    handleSubmit = (e) => {
        //e.preventDefault()
        this
            .props
            .createBatch(this.state)
    }

    handleChange = (event) => {
        //event.preventDefault()
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
          required
          onChange={ this.handleChange }
          type="text"
          className={classes.textField}
          margin="normal"
        />

   <TextField
        id="startdate"
        label="Start Date"
        type="date"
        required
        name="startdate" 
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
         <TextField
        id="enddate"
        label="End Date"
        type="date"
        required
        name="enddate" 
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
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
