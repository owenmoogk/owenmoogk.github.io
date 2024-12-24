import React, {useState} from 'react';
import '../css/navbar.css'

export default function NavButton() {

	const [text, setText] = useState("Menu");

	function toggleNav(){
		var navBox = document.getElementById('navBox')
		if (navBox.style.display === 'block'){
			navBox.style.display = ''
			setText('Menu')
			document.body.style.overflow = ''
		}
		else{
			navBox.style.display = 'block'
			setText('Exit')
			document.body.style.overflow = 'hidden'
		}
	}

	return (
		<div id="navButton" onClick={()=>toggleNav()}><p>{text}</p></div>
	);
}