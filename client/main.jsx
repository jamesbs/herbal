Herbal = React.createClass({
  render() {
    return (
      <div>Herbal : Jamesbs</div>
    );
  }
});

Meteor.startup(() => {
  React.render(<Herbal />, document.getElementById('herbal-app'));
});