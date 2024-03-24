import global from "../../global/global.json";
const { homepage } = global

export default function ProjectIcon(props: {
	data: {
		name: string;
		githubLink: string;
		types: string[];
		title: string;
		externalLink: string;
		description: string;
	}
}) {

	var data = props.data

	let link = '/projects/' + data.name
	let githubLink = data.githubLink !== undefined ? data.githubLink : 'https://github.com/owenmoogk/' + data.name
	let types = data.types.map((x: string) => x.toLowerCase())
	let primaryType = types[0] ?? "";
	let externalLink = data.externalLink?.includes("https://") ? data.externalLink : homepage + data.externalLink
	// if it doesn't exist just leave it
	externalLink = data.externalLink ? externalLink : data.externalLink

	return (
		<a href={link}>

			{/* content is the overarching; primary type is for the after pseudo element style above; and type is for sorting*/}
			<div className={"content " + primaryType + "Tile " + types}>

				<div>
					<span className="contentTitle">{data.title}</span>
					<span className='dot'>--</span>
					<span className='contentDesc'>{data.description}</span>

					{/* this is just for sorting, not display */}
					<span className='type' style={{ display: "none" }}>{types.map((x: string) => <>{x}</>)}</span>
				</div>

				<div className='projectIcons'>

					{/* open externally */}
					{externalLink
						? <a href={externalLink} target='_blank' rel='noreferrer'>
							<svg width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className={types.join(" ")}>
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
							<svg width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
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