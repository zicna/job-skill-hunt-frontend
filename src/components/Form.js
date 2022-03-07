import React, { Component } from 'react'

export default class Form extends Component {
    state ={
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }

    handleChange = (event) => {
        // console.log("change has been made")
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        // some code here
        this.setState({first_name: "",
        last_name: "",
        email: "",
        password: ""})
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
              <input type="text" value= {this.state.first_name} onChange={this.handleChange} name="first_name" placeholder='first_name' />
          </div>
          <div>
              <input type="text" value= {this.state.last_name} onChange={this.handleChange} name="last_name" placeholder='last_name' />
          </div>
          <div>
              <input type="email" value= {this.state.email} onChange={this.handleChange} name="email" placeholder='email' />
          </div>
          <div>
              <input type="password" value= {this.state.password} onChange={this.handleChange} name="password" placeholder='password' />
          </div>
          <div>
              <input type="submit" value="Submit" />
          </div>
      </form>
    )
  }
}
