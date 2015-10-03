Meteor.startup(() => {
  let App = Herbal.React;

  Herbal.React.Main = React.createClass({
    render() {
      return (
        <div className="inner"> 
          <header>
            <a id="main-logo" href="/">Herbal</a>
            <App.AccountWidget />
            <App.Search />
          </header>
          <main>
            <App.List/>
            <App.List/>
          </main>
        </div>
      );
    }
  });

  React.render(<App.Main />, document.getElementById('herbal-app'));
})