Meteor.startup(() => {
	let App = Herbal.React;

	App.Search = React.createClass({
		render() {
			return (
				<div id="search-widget">
					<div className="search-box">
						<input type="text" name="search" />
						<i className="fa fa-lg fa-search"></i>
					</div>
					<i className="fa fa-search expand-button"></i>
				</div>
			);
		}
	});
});