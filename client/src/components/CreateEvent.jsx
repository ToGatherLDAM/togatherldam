import React from 'react';
import ReactDOM from 'react-dom';
// import CreateEvent from ''

class CreateEvent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      name: '',
      description: '',
      date: '',
      time: ''
		}
	}

	render() {
		return (
      <form>
        <h1> Create New Event</h1>
	        <div>
	        	<label>
		        	Name:       
		        	<input type="text"/>
	          </label>
	        </div>
	        <div>
	        	<label>
		        	Description: 
		        	<input type="text"/>
	          </label>
	        </div>
	        <div>
	        	<label>
		        	Date: 
		        	<input type="text"/>
	          </label>
	        </div>
	        <div>
	        	<label>
		        	Time: 
		        	<input type="text"/>
	          </label>
	        </div>
	       

      </form>
		)
	}
}

export default CreateEvent;