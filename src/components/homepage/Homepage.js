import '../../css/home.css'
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

	}, []);

	return (
		<div id='homepage'>
			<div id='leftSection' className='homepageSection'>
				<h1>Owen <br/> Moogk</h1>
				<p id="splash" onClick={() => loadSplash()}>{splash}</p>
				<a href='/#/contact' id='largeScreenContactButton'>
					<button>Contact Me</button>
					<br/><br/>
				</a>
			</div>
			<div id="rightSection" className='homepageSection'>
				<p>
					Hey! I'm Owen, and this is my website.
					I aspire to be a software engineer, and also work on web development and mechanical CAD.
					Feel free to <a href='/#/contact'>reach out</a>, or have a look at my <a href='/#/projects'>projects</a>.
				</p>
				<a href='/#/contact' id='smallScreenContactButton'>
					<button>Contact Me</button>
					<br/><br/>
				</a>
			</div>
		</div>
	);
}