// import React from 'react';
// class SongList extends React.Component {}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
	//a helper method
	renderList() {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary" onClick={() => this.props.selectSong(song)}>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}
	render() {
		// console.log(this.props);
		return (
			<div>
				<h2>Song List</h2>
				<div className="ui divided list">{this.renderList()}</div>
			</div>
		);
	}
}
//by convention, use this name
//arg: states from Redux Store
const mapStateToProps = (state) => {
	return { songs: state.songs };
};
// export default connect(mapStateToProps, {
// 	selectSong: selectSong,
// })(SongList);
export default connect(mapStateToProps, { selectSong })(SongList);
