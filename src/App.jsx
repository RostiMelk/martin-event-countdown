import React, { useState } from 'react';
import Logo from './components/Logo';
import Video from './components/Video';
import Countdown from './components/Countdown';
import './App.css';

function App() {
	const [showVideo, setShowVideo] = useState(false);
	const TIME_TO_LIVE = new Date('2021-10-30T19:00:00.000+02:00');
	const appClass = showVideo ? 'video' : 'countdown';

	const handleDone = (status) => {
		if (status === true) setShowVideo(true);
	};

	return (
		<div className={`app ${appClass}`}>
			<Logo />
			{showVideo ? (
				<Video src="https://www.youtube.com/embed/5eDz4ya-QEA?autoplay=1" />
			) : (
				<Countdown timeEnd={TIME_TO_LIVE} handleDone={handleDone} />
			)}
		</div>
	);
}

export default App;
