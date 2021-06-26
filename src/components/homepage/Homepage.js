import React, {useState, useEffect} from 'react'

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
				<p id="title">Hey, it's <br/><span>Owen Moogk</span></p>
				<p id="splash" onClick={() => loadSplash()}>
					<svg focusable="false" width="20px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M21 12l-7-9v4.99L3 8v8h11v5l7-9z" stroke="#FF69B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
					&nbsp;{splash}&nbsp;
					<svg focusable="false" width="20px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{transform: 'rotate(180deg)'}}><g fill="none"><path d="M21 12l-7-9v4.99L3 8v8h11v5l7-9z" stroke="var(--blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
				</p>
			</div>
		</div>
	);
}