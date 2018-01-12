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
        <h1 id='signInTitle'>ToGather</h1>  
        <form class='signInForm'>
          <h2 class='signInTittle'>Sign in</h2>
          <input class='signInInput' type="text" ref="username" placeholder="enter you username" />
          <input class='signInInput' type="password" ref="password" placeholder="enter password" />
          <input class='signInInput loginButton' type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default LogIn;
