import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    //js function not specific for React
    //constructor function will be initialized called anytime the instance of this class is created
    // constructor(props) {
    //     //override the React.Component constructor
    //     super(props);
    //     //initialize the state object assigning with key property and value
    //     //THIS IS THE ONLY TIME we do direct assignment to this.state
    //     this.state = { lat: null, errorMessage: "" };
    // }
    //another method to initialize state without constructor
    state = { lat: null, errorMessage: "" };
    //initial data loading
    componentDidMount() {
        //use the geolocation API to get he location
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //we call setState to update the state THE ONLY WAY
                this.setState({ lat: position.coords.latitude });
            },
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log("My component was just updated -- it rerendered!");
    }

    //a helper method: renderContent to avoid conditional in render()
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error:{this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Spinner message="Please accept location request" />;
    }
    //React says we have to define render!
    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
