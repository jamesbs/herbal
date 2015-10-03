HerbalApp = React.createClass({
  render() {
    return (
      <div className="inner"> 
        <header>
          <a id="main-logo" href="/">Herbal</a>
          <AccountWidget />
          <Search />
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
  React.render(<HerbalApp />, document.getElementById('herbal-app'));
});