import React from 'react';
import {Link} from 'react-router-dom'

export default function ProjectIcon(props) {

	let link = '/projects/'+props.name
	let type = props.type.toLowerCase()
	// using the link prop overrides the default link
	let linkChanged = false
	if (props.link){
		linkChanged = true
		link = props.link
	}

	let img = process.env.PUBLIC_URL + '/img/projects/'+props.name+"/main.png"
	function innerHtml(){
		return(
			<div>
				<div className={"content-overlay "+type}></div>
				<img className="content-image" src={img} alt=''/>
				<div className={"content-details "+type}>
					<h3 className="content-title">{props.title}</h3>
					<p className="type">{type.toUpperCase()}</p>
				</div>
			</div>
		)
		
	}
	return (
		<div className="content">
			{linkChanged ? 
			<a href={link} target='_blank' rel='noreferrer'>
				{innerHtml()}
			</a>
			:
			<Link to={link}>
				{innerHtml()}
			</Link>
			}
		</div>
	);
}