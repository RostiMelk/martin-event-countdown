import React, { useState, useEffect } from 'react';
import countdownHandler from 'countdown';

const Countdown = ({ timeEnd, handleDone }) => {
	const [countdown, setCountdown] = useState('⏰');

	useEffect(() => {
		const count = countdownHandler(timeEnd);

		console.log(count.value);

		if (count.value > 1000) {
			handleDone(true);
			return;
		}

		countdownHandler.setLabels(
			' millisekund| sekund| minutt| time| dag| uke| måned| år| tiår| århundre| årtusen',
			' millisekunder| sekunder| minutter| timer| dager| uker| måneder| år| tiår| århundre| årtusen',
			' og ',
			', ',
			'🥁'
		);

		const countString = count.value > 0 ? '🥁' : count.toString();
		const interval = setInterval(() => setCountdown(countString), 1000);
		return () => {
			clearInterval(interval);
		};
	}, [countdown]);

	return <h1 className="countdown">{countdown}</h1>;
};

export default Countdown;
