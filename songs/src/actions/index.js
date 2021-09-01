//Action creator
//instead of default exporter create a named exporter
export const selectSong = (song) => {
	//return an action
	return {
		type: 'SONG_SELECTED',
		payload: song,
	};
};
// export default selectSong;
