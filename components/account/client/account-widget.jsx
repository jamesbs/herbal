Meteor.startup(() => {
    let App = Herbal.React;

    App.AccountWidget = React.createClass({
        render() {
            return (
                <div id="account">
                    <div className="profile-pic"></div>
                    <div className="name">James</div>
                </div>
            )
        }
    })
});