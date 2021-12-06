import React from 'react';

export default function FeaturedIcon(props) {

	let link = '/projects/' + props.name
	var types = props.type.toLowerCase().split(' ')

	// ok so c++ gives an error when put into a variable, so we just change it for the filtering stuff, display still says C++
	for (var i = 0; i < types.length; i++){
		if (types[i] === 'c++'){
			types[i] = 'c'
		}
	}

	var borderColor;
	
	if (types.length === 1){
		borderColor = 'linear-gradient(white, white), linear-gradient(45deg, var(--'+types[0]+', gray), var(--'+types[0]+', gray))'
	}
	else if (types.length === 2){
		borderColor = 'linear-gradient(white, white), linear-gradient(45deg, var(--'+types[0]+', gray) 40%, var(--'+types[1]+', gray) 60%)'
	}
	else if (types.length === 3){
		borderColor = 'linear-gradient(white, white), linear-gradient(45deg, var(--'+types[0]+', gray) 30%, var(--'+types[1]+', gray) 40%, var(--'+types[1]+', gray) 60%, var(--'+types[2]+', gray) 70%)'
	}
	
	return (
		<a href={link} style={{margin: '20px'}} className='featuredIconLink'>

			<div className='featuredIcon' style={{
				backgroundImage: borderColor
			}}>
				<div className='featuredImage'>
					<img src={'/assets/projects/' + props.name + '/main.png'}></img>
				</div>
				<div className='featuredText'>
					<span className="contentTitle">{props.title}</span>
					<span className='contentDesc' style={{display: "none"}}>{props.description}</span>
					<span className='type' style={{display: 'none'}}>{props.type}</span>
				</div>
			</div>
		</a>
	);
}