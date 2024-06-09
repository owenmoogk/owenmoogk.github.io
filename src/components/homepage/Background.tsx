import React, {useEffect} from 'react'
import {loadBackground} from './backgroundHelper.js'

export default function Background() {

	useEffect(() => {
		loadBackground();
	}, []);

	return (
		<canvas id='background-canvas' style={{zIndex: -1}}></canvas>
	);
}