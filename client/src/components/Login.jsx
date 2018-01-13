import React from 'react';


class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''

    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  ComponentDidMount() {
    this.onSubmit();
  }




  onSubmit() {}

  render() {
    return (
      <div>
        <form className='signInForm'>
          <h2 className='signInTittle'>Sign in</h2>
          <input className='signInInput' type="text" ref="username" placeholder="enter you username" />
          <input className='signInInput' type="password" ref="password" placeholder="enter password" />
          <input className='signInInput loginButton' type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default LogIn;
