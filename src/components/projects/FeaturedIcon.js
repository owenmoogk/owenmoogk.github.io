import React from 'react';

export default function FeaturedIcon(props) {

	let link = '/projects/' + props.name
	let githubLink = props.githubLink !== undefined ? props.githubLink : 'https://github.com/owenmoogk/' + props.name
	let type = props.type
	let typeList = props.type.split(' ')
	let primaryType = type.split(' ')[0].toLowerCase()

	// if we want to show the archives, then the others are hidden
	var hide = props.showArchive !== (props.archive === true)

	return (
		<a href={link}>

			{/* content is the overarching; primary type is for the after pseudo element style above; and type is for sorting*/}
			<div className='featuredIcon'>


				<div className='featuredImage'>
					<img src={'/img/projects/' + props.name + '/main.png'}></img>
				</div>
				<div className='featuredText'>
					<span className="contentTitle">{props.title}</span>
					{/* <span className='contentDesc'>{props.description}</span> */}
				</div>
			</div>
		</a>
	);
}