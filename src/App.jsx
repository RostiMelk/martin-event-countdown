import React, { useState } from 'react';
import Logo from './components/Logo';
import Message from './components/Message';
import Countdown from './components/Countdown';
import './App.css';

function App() {
	const [showMessage, setShowMessage] = useState(false);
	const TIME_TO_LIVE = new Date('2021-10-30T19:00:00.000+02:00');

	const handleDone = (status) => {
		if (status === true) setShowMessage(true);
	};

	return (
		<div className="App">
			<Logo />
			{showMessage ? <Message /> : <Countdown timeEnd={TIME_TO_LIVE} handleDone={handleDone} />}
		</div>
	);
}

export default App;
