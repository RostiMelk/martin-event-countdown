import React from 'react';

const Video = ({ src }) => {
	return (
		<div className="iframe-container">
			<iframe src={src} title="YouTube video player" autoPlay="1" frameBorder="0"></iframe>
		</div>
	);
};

export default Video;
