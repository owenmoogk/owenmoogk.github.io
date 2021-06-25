import 'css/home.css'
import React, {useState, useEffect} from 'react'
import Background from 'components/background/Background.js'

export default function Homepage() {

	function loadSplash(){
		fetch(process.env.PUBLIC_URL+'/splashes.txt')
		.then(response => response.text())
		.then(data => {
			let items = data.split(/\r?\n|\r/);
			let index = getRandomInt(0, items.length-1)
			let item = items[index]
			setSplash(item)
  		});
	}
	
	// from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
	function getRandomInt(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return (Math.floor(Math.random() * (max - min + 1)) + min)
	}
	
	const [splash, setSplash] = useState('');
	// lol this feels hacky but the [] makes it only load once
	useEffect(() => {

		// load a random splash
		loadSplash();

		// setting the background to have no scrolling
		document.body.style.overflowY = 'hidden'
		document.body.style.overflowX = 'hidden'

		// return is fired on componentwillunmount
		return() =>{
			document.body.style.overflowY = 'scroll'
			document.body.style.overflowX = 'scroll'
		}

	}, []);
	

	return (
		<div>
			<div className='title'>
				<p id="title">Owen Moogk</p>
				<p id="splash" onClick={() => loadSplash()}>{splash}</p>
				<p id="secret">You found the top secret button (don't click this text)</p>
			</div>
			<div id="secretButton" onClick={()=> document.getElementById('secret').style.display = 'inherit'}></div>
			<Background />
		</div>
	);
}