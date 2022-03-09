import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }

  handleChange = (event) => {
    // console.log("change has been made")
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    // some code here
    // debugger
    // fetch('http://localhost:3001/users/sign_in', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(this.state)
    // })
    //   .then((response) => {
    //     debugger
    //     response.json()})
    //   .then((data) => console.log(data))

    fetch('http://localhost:3001/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res.headers.get('Authorization'))
          localStorage.setItem('token', res.headers.get('Authorization'))
          return res.json()
        } else {
          throw new Error(res)
        }
      })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err))

    //   reset form
    this.setState({ first_name: '', last_name: '', email: '', password: '' })
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
