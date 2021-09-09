import React from 'react';
import StreamForm from './StreamForm';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
class StreamCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.createStream(formValues); //call the action creator to make a request
		// event.preventDefault(); //redux called automatically
	};
	render() {
		return (
			<div>
				<h3>Create a Stream</h3>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
