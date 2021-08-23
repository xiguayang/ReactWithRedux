import React from "react";

//class-based Component
class SearchBar extends React.Component {
    //a helper method that be called at anytime user changes the input
    // onInputChange(event) {
    //     //return the input onChange value
    //     console.log(event.target.value);
    // }
    state = { term: "" };
    //event handlder unable the default 'enter'submit
    onFormSubmit(event) {
        event.preventDefault();
        // //will cause error: this is undefined not refer to SearchBar instance
        // console.log(this.state.term);
        this.props.onUserSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form
                    onSubmit={(event) => this.onFormSubmit(event)}
                    className="ui form"
                >
                    <div className="field">
                        <label>Image Search</label>
                        {/* onInputChange is a callback function without ()  */}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({
                                    term: e.target.value,
                                })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
