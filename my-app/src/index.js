//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component
// const App = function(){
//     return <div>Hi there!</div>
// }

// function getButtonText() {
//     return "Click on me!";
// }

const App = () => {
    const buttonText = "Click Me!";
    const buttonText1 = [10, "hello"];
    const lableText = "Enter name:";
    const buttonTextObj = { text: "clickclick" };
    // const styleObj = { backgroundColor: "blue", color: "white" };
    return (
        <div>
            <label className="label " htmlFor="name">
                {lableText}
            </label>
            <input id="name" type="text" />
            {/* <button style={styleObj}> */}
            <button style={{ backgroundColor: "blue", color: "white" }}>
                {/* {buttonText} */}
                {/* {getButtonText()} */}
                {buttonTextObj.text}
            </button>
        </div>
    );
};
//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
