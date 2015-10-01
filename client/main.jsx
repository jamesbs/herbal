Herbal = React.createClass({
  render() {
    return (
      <div className="inner"> 
        <header>
          <a id="main-logo" href="/">Herbal</a>
          <AccountWidget />
        </header>
        <main>
          <List/>
          <List/>
        </main>
      </div>
    );
  }
});

Meteor.startup(() => {
  React.render(<Herbal />, document.getElementById('herbal-app'));
});