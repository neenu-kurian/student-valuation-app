import React, {PureComponent} from 'react'
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export default class LoginForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<div className="center-card">
							<h1>Login</h1>
			<form onSubmit={this.handleSubmit}>

				<TextField
          id="email"
          label="Email"
		  placeholder="Email"
		  name="email"
          onChange={this.handleChange}
          margin="normal"
        />

				<br/>


				<TextField
          id="password-"
          label="Password"
		  type="password"
		  name="password"
		  margin="normal"
		  onChange={ this.handleChange }
        />
			<br/>

				<Button variant="raised" color="primary" type="submit">Login</Button>
			</form>
			</div>
		)
	}
}




