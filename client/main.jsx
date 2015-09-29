Herbal = React.createClass({
  render() {
    return (
      <header>
        <a id="main-logo" href="/">Herbal</a>
        <AccountWidget />
      </header>
    );
  }
});

Meteor.startup(() => {
  React.render(<Herbal />, document.getElementById('herbal-app'));
});