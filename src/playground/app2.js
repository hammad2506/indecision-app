console.log("App is running");

class VisibilityApp extends React.Component{
    constructor(props){
        super(props);
        this.onUnhide = this.onUnhide.bind(this);

        this.state = {
            showHide: false
        }
    }

    onUnhide(){
        this.setState((prevState) => {
            return {
                showHide : !prevState.showHide
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility app</h1>
                <button onClick={this.onUnhide}>
                {this.state.showHide ? 'Hide Details' : 'Show Details' }
                </button>
                { this.state.showHide && <p>hi hello whatsup</p>}
            </div>
        );
    }
}

 ReactDOM.render(<VisibilityApp />, document.getElementById('root'));




