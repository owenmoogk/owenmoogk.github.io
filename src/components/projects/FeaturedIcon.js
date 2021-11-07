import React from 'react';

export default function FeaturedIcon(props) {

	let link = '/projects/' + props.name

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