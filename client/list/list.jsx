List = React.createClass({
	getInitialState() {
		return {
			title: 'Untitled List'
		};
	},
	render() {
		return (
			<div className="list active">
				<div className="title">{this.state.title}</div>
				<ul>
					<Listing/>
					<Listing/>
					<Listing/>
				</ul>
			</div>
		); 
	}
});