import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import {createStudent} from '../../actions/operations'
import {Link} from 'react-router-dom'

class NewBatch extends PureComponent {
    constructor() {
        console.log("inside newstudent")
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
            .createStudent(this.state,this.props.match.params.batchid)
    }

    handleChange = (event) => {
        //event.preventDefault()
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    render() {
        console.log(this.props.match.params.batchid)
        return (
           
            <Card className="center-card">
                <CardContent>
                    <form className="batch-form">

                        <div className="studentname-field">
                            <label className="label-field">
                                StudentName
                            </label>
                            <input type="text" name="studentname" className="batchname-field" //value={this.state.batchname
                         onChange={this.handleChange} />

                        </div>

                        <div className="picture-field">
                            <label className="label-field">StudentImage
                            </label>
                            <br/>
                            <input type="text" className="picture-field" name="studentimage" // value={this.state.enddate
                         onChange={this.handleChange} />
                        </div>

                        <CardActions>
                            <Link to ={`/batches/${this.props.match.params.batchid}`
                            }><Button
                                className="submit-action"
                                onClick={this.handleSubmit}
                                style={{
                                textAlign: ''
                            }}>
                                Submit
                            </Button> </Link>
                        </CardActions>
                    </form>

                </CardContent>
            </Card>

        )
    }
}

export default connect(null, {createStudent})(NewBatch)