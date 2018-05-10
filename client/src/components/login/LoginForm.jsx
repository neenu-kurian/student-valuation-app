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
			<div>
			<form onSubmit={this.handleSubmit}>
				{/* <div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div> */}
				<TextField
          id="email"
          label="Email"
		  placeholder="Email"
		  name="email"
          onChange={this.handleChange}
          margin="normal"
        />

				<br/>

					{/* <label htmlFor="password">Password</label> */}
					{/* <input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } /> */}

				<TextField
          id="password-"
          label="Password"
		  type="password"
		  name="password"
		  margin="normal"
		  onChange={ this.handleChange }
        />
			<br/>
				{/* <button type="submit">Login</button> */}
				<Button variant="raised" color="primary" type="submit">Login</Button>
			</form>
			</div>
		)
	}
}




