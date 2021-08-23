import React from "react";
class SearchBar extends React.Component {
    state = { term: "" };
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };
    onFormSubmit = (event) => {
        //prevent default 'enter' refresh
        event.preventDefault();
        //TODO: Make sure we call callback from parent component
        this.props.onUserTermSubmit(this.state.term);
    };
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
