import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import {createStudent} from '../../actions/operations'
import {Link} from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import TextField from 'material-ui/TextField';

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
            .createStudent(this.state,this.props.match.params.batchid)
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    render() {
        return (
           <div>
            <Card className="center-card">
                <CardContent>
                    <form className="batch-form">

        <TextField
          id="studentname"
          placeholder="Student Name"
          required
          onChange={ this.handleChange }
          name="studentname"
          type="text"
          margin="normal"
        />

                        <br/>

        <TextField
          id="studentimage"
          placeholder="Student Image"
          required
          onChange={ this.handleChange }
          name="studentimage"
          type="url"
          margin="normal"
        />
                        <CardActions>
                            <Link to ={`/batches/${this.props.match.params.batchid}`
                            }><Button  color="primary"
                            variant="raised" 
                                className="submit-action"
                                onClick={this.handleSubmit}
                                >
                                <AddIcon/>Add Student
                            </Button> 
      </Link>
                        </CardActions>
                    </form>

                </CardContent>
            </Card>
            </div>

        )
    }
}

export default connect(null, {createStudent})(NewBatch)