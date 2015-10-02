Listing = React.createClass({
	getInitialState() {
		return {
			title: 'I am a list item'
		};
	},

	render() {
		return (
			<li>{this.state.title}</li>
		);
	}
});