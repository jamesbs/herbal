Meteor.startup(() => {
    let App = Herbal.React;

    App.List = React.createClass({
        getInitialState() {
            return {
                title: 'Untitled List'
            };
        },
        updateTitle(e) {
            this.setState('title', e.target.value);
        },
        render() {
            return (
                <div className="list active">
                    <input type="text" 
                           className="title" 
                           value={this.state.title}
                           placeholder={this.getInitialState().title}
                           onChange={this.updateTitle}
                    />
                    <ul>
                        <App.Listing/>
                        <App.Listing/>
                        <App.Listing/>
                    </ul>
                </div>
            ); 
        }
    });
});
