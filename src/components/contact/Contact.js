import React from 'react';
import ContactLink from './ContactLink.js'
import '../../css/contact.css'

export default function ContactPage() {

	function sendEmail(){
		
		var name = document.getElementById('nameInput').value
		var email = document.getElementById('emailInput').value
		var subject = document.getElementById('subjectInput').value
		var message = document.getElementById('messageInput').value

		if (!(name && email && subject && message)){
			alert("Fields cannot be blank")
		}

		message = 'Sent from '+ name + " -- " + email + "\r\n" + message
		var _0x7cb6=["\x63\x6F\x6E\x74\x61\x63\x74\x6F\x77\x65\x6E"];
		var password=_0x7cb6[0]

		// window access stuff imported in the html
		window.Email.send({
			Host: "smtp.gmail.com",
			Username: "owenswebsite1@gmail.com",
			Password: password,
			To: 'owenmoogk@gmail.com',
			From: "owenswebsite@gmail.com",
			Subject: subject,
			Body: message,
		})
		.then(function () {
			document.getElementById('nameInput').value = ''
			document.getElementById('emailInput').value = ''
			document.getElementById('subjectInput').value = ''
			document.getElementById('messageInput').value = ''
			alert("Sent!")
		});
		}

	return (
		<div className="main contactPage">
			<p className="title">Contact</p>
			<hr />
			<form>
				<div>
					<input type='text' placeholder='John Doe' id='nameInput'></input>
					<input type='text' placeholder='johndoe@gmail.com' id='emailInput'></input>
				</div>
				<input type='text' placeholder='Subject' id='subjectInput'></input>
				<textarea type='text' placeholder='Message' id='messageInput'></textarea>
				<button value="Send Email"
					onClick={() => sendEmail()}>Submit</button>
			</form>
			<br/>
			<div id="contacts">
				<ContactLink link='mailto:owenmoogk@gmail.com' text='Personal Email' />
				<ContactLink link='tel:+1-226-989-0602' text='Phone' />
				<ContactLink link='https://linktr.ee/owenmoogk' text='Social Media' />
				<ContactLink link='https://github.com/owenmoogk' text='Github' />
				<ContactLink link='https://www.thingiverse.com/owen_moogk' text='Thingiverse' />
				<ContactLink link='https://repl.it/@owenm21' text='Repl.it' />
				<ContactLink link='https://www.linkedin.com/in/owen-moogk-1ab9371b8/' text='LinkedIn' />
			</div>
			<br/>
		</div>
	);
}
