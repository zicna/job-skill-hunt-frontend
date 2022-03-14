import React, { Component } from 'react'

export default class LogInForm extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    fetch()

    this.setState({
      email: '',
      password: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="*******"
            value={this.state.password}
            name="password"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <input type="submit" value="LogIn" />
        </div>
      </form>
    )
  }
}
