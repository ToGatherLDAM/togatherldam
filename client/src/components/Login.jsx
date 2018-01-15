import React from 'react';
import ReactDOM from 'react-dom';

// import Popover from '@terebentina/react-popover';
import Popover from 'react-popover-component';
// require('react-popover-component/dist/styles.css');

// optional, you can bring your own styles if you want
// import '@terebentina/react-popover/lib/styles.css';

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
  // <div> 
  //   Login
  // </div>