import React from 'react';

export default function ContactLink(props) {
	return (
		<a href={props.link} target="_blank" rel='noreferrer'>
			<div className="contactLink">
				<span className='header'>{props.text}</span>
				<span className='contactText'> -- {props.link}</span>
			</div>
		</a>
	);
}