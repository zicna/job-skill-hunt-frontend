import React, { Component } from 'react'

export default class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    fetch('http://localhost:3001/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
        },
      }),
    })
      .then((res) => {
        this.setState({ first_name: '', last_name: '', email: '', password: '' })
        if (res.ok) {
          console.log(res.headers.get('Authorization'))
          localStorage.setItem('token', res.headers.get('Authorization'))
          return res.json()
        } else {
          throw new Error(res)
        }
      })
      .then((json) => {
        this.props.setToken(!!localStorage.token)
        this.props.setUser(json.data)
        console.dir(json)
      })
      .catch((err) => console.error(err))

    //   reset form
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.handleChange}
            name="first_name"
            placeholder="first_name"
          />
        </div>
        <div>
          <input
            type="text"
            value={this.state.last_name}
            onChange={this.handleChange}
            name="last_name"
            placeholder="last_name"
          />
        </div>
        <div>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            placeholder="email"
          />
        </div>
        <div>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            placeholder="password"
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

