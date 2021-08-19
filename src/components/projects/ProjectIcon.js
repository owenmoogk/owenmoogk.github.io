import React from 'react';

export default function ProjectIcon(props) {

	let link = '/projects/' + props.name
	let githubLink = props.githubLink !== undefined ? props.githubLink : 'https://github.com/owenmoogk/' + props.name
	let type = props.type
	let primaryType = type.split(' ')[0].toLowerCase()
	
	// if we want to show the archives, then the others are hidden
	var hide = props.showArchive != (props.archive == true) 

	return (
		<a href={link} style={{display: hide ? 'none' : ''}}>
			<style dangerouslySetInnerHTML={{__html: `
				.${primaryType}Tile:after{
					background: var(--${primaryType}, grey)
				}
			`}}></style>

			{/* content is the overarching; primary type is for the after pseudo element style above; and type is for sorting*/}
			<div className={"content "+primaryType+"Tile "+type+ (props.archive===true ? " archive": "")} style={{border: '2px solid var(--'+primaryType+', grey)'}}>
				<div>
					<h3 className="content-title">{props.title}</h3>
					<p className="type">{type}</p>
				</div>
				<div className='projectIcons'>

					{/* open externally */}
					{props.link
						? <a href={props.link} target='_blank' rel='noreferrer'>
							<svg width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className={type}>
								<g fill="none">
									<path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</g>
							</svg>
						</a>
						: null
					}

					{/* github logo */}
					{githubLink
						? <a href={githubLink} target='_blank' rel='noreferrer'>
							<svg width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className={type}>
								<g fill="none">
									<path d="M12 4c1.668 0 2.612.4 3 .5c.525-.425 1.938-1.5 3.5-1.5c.344 1 .286 2.22 0 3c.75 1 1 2 1 3.5c0 2.188-.483 3.582-1.5 4.5c-1.017.918-2.111 1.375-3.5 1.5c.65.538.5 1.874.5 2.5v3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M12 4c-1.668 0-2.612.4-3 .5C8.475 4.075 7.062 3 5.5 3c-.344 1-.286 2.22 0 3c-.75 1-1 2-1 3.5c0 2.188.483 3.582 1.5 4.5c1.017.918 2.111 1.375 3.5 1.5c-.65.538-.5 1.874-.5 2.5v3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5" strokeWidth="2" strokeLinecap="round" />
								</g>
							</svg>
						</a>
						: null
					}

				</div>
			</div>
		</a>
	);
}