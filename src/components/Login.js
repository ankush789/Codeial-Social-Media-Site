import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('this.state', this.state);
  };
  render() {
    return (
      <div>
        <form className="login-form">
          <span className="login-signup-header">Log In</span>
          <div className="field">
            <input
              type="email"
              placeholder="Email"
              ref={this.emailRef}
              onChange={this.handleEmailChange}
              value={this.state.email}
              required
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              ref={this.passwordRef}
              onChange={this.handlePasswordChange}
              value={this.state.password}
              required
            />
          </div>
          <div className="field">
            <button onClick={this.handleFormSubmit}>Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
