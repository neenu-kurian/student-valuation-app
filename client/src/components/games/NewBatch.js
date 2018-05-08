import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import {createBatch} from '../../actions/games'
import {Link} from 'react-router-dom'

class NewBatch extends PureComponent {
   constructor(){
       console.log("inside newbatch")
       super()
       this.handleChange =this.handleChange.bind(this)
       this.handleSubmit=this.handleSubmit.bind(this)
   }
    

	handleSubmit = (e) => {
        e.preventDefault()
        this.props.createBatch(this.state) 
	}

	handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target

		this.setState({
          [name]: value
		})
	}

    render () {

       
        return (
            
            <Card className="batch-card">
                <CardContent>
                    <form className="batch-form">
                    

                        <div className="batch-field">
                            <label className="label-field">Batch Number </label>
                            <input type="number" name="batchid" className="input-field"
                            id="title" 
                            
                            onChange={ this.handleChange }
                           // value={this.state.title }
                            />
                        </div>

                        <div className="batchname-field">
                            <label className="label-field" > BatchName </label>
                            <input type="text" name="batchname" className="batchname-field" 
                            //value={this.state.batchname} 
                            onChange={ this.handleChange } />

                        </div>

                        <div className="startdate-field">
                            <label className="label-field">StartDate </label> <br/>
                            <input type="text" className="startdate-field" 
                            name="startdate" 
                            //value={this.state.startdate} 
                            onChange={ this.handleChange }
                            />
                        </div>
                        <div className="enddate-field">
                            <label className="label-field">StartDate </label> <br/>
                            <input type="text" className="enddate-field" 
                            name="enddate" 
                           // value={this.state.enddate} 
                            onChange={ this.handleChange }
                            />
                        </div>

                    <CardActions>
                        <Link to ="/batches"><Button className="submit-action" onClick={this.handleSubmit} 
                        style={{ textAlign: '' }}
                        > Submit </Button></Link>
                    </CardActions>
                    </form>

                </CardContent>
            </Card>

        )
    }
}


export default connect(null,{createBatch})(NewBatch)