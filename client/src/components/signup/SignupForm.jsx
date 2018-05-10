import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export default class SignupForm extends PureComponent {
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
			<form onSubmit={this.handleSubmit}>
							<h1>Sign up</h1>
				

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

				

				<TextField
          id="confirmPassword-"
          label="Confirm Password"
		  type="password"
		  name="confirmPassword"
		  margin="normal"
		  onChange={ this.handleChange }
        />
				<br/>

				{
					this.state.password &&
					this.state.confirmPassword &&
					this.state.password !== this.state.confirmPassword &&
					<p style={{color:'red'}}>The passwords do not match!</p>
				}


				<Button variant="raised" color="primary" type="submit">Sign Up</Button>
			</form>
			</div>
		)
	}
}
