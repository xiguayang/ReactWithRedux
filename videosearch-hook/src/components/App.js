import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
const App = ({}) => {
	// const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos('buildings');
	useEffect(() => {
		//any time searched videos change, selected default video changes
		setSelectedVideo(videos[0]);
	}, [videos]);

	// useEffect(() => {
	// 	onTermSubmit('buildings');
	// }, []);

	// const onTermSubmit = async (term) => {
	// 	const { data } = await youtube.get('/search', {
	// 		params: {
	// 			q: term,
	// 		},
	// 	});
	// 	setVideos(data.items);
	// 	setSelectedVideo(data.items[0]);
	// };
	// const onVideoSelect = (video) => {
	// 	setSelectedVideo(video);
	// };

	return (
		<div className="ui container">
			<SearchBar onUserTermSubmit={search} />
			<div className="ui grid">
				{/* each ui row has 16 colomns */}
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList
							// onVideoSelect={(video) => {
							// 	setSelectedVideo(video);
							// }}
							onVideoSelect={setSelectedVideo}
							videos={videos}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
