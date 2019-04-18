import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {


	
	constructor(props) {
	super(props);

		this.state = {searchTerm: "", apiURL: "", imageURL: ""};

		this.handleChange = this.handleChange.bind(this);

	}
	handleChange(event) {
		this.setState({
			searchTerm: event.target.value,
			apiURL: `https://pixabay.com/api/?key=12239811-99240c18f1be8a6dcaa335174&q=${event.target.value}&image_type=photo`
		});

		

		console.log(this.state);
	}

	render() {
		return (
			<div>
				<input type="text" name="name" value={this.state.searchTerm} onChange={this.handleChange}></input>
				Form fields, pics
				<img src={this.state.imageURL} />
			</div>
			)
	}

}

ReactDOM.render(<App />, document.getElementById('root'));