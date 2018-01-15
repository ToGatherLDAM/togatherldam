import React from 'react';
import Popover from 'react-popover-component';


const Login = () => (
  <div>
    If you want to see a nice popover 
    <Popover
	  target={(<div>Click me!</div>)}
	>
	  Lorem ipsum dolor sit amet.
	</Popover>
  </div>
	)
  

export default Login;



// class LogIn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: ''

//     };
//     this.onSubmit = this.onSubmit.bind(this);
//   }
//   ComponentDidMount() {
//     this.onSubmit();
//   }




//   onSubmit() {}

//   render() {
//     return (
//       <div>
//         <form className='signInForm'>
//           <h2 className='signInTittle'>Sign in</h2>
//           <input className='signInInput' type="text" ref="username" placeholder="enter you username" />
//           <input className='signInInput' type="password" ref="password" placeholder="enter password" />
//           <input className='signInInput loginButton' type="submit" value="Login" />
//         </form>
//       </div>
//     );
//   }
// }

// export default LogIn;

