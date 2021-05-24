import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('emailRef', this.emailRef);
    console.log('passwordRef', this.passwordRef);
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
              required
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              ref={this.passwordRef}
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
