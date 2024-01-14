export default function FeaturedIcon(props: {
	data: {
		name: string;
		types: string[];
		title: string;
		date?: string;
		description?: string;
	};
}) {

	var data = props.data
	let link = '/projects/' + data.name
	var types = data.types.map((x: string) => x.toLowerCase())
	return (
		<a href={link} style={{ margin: '20px' }} className='featuredIconLink'>

			<div className='featuredIcon' style={{
				backgroundColor: "white"
			}}>
				<div className='featuredImage'>
					<img src={'/assets/projects/' + data.name + '/main.png'} alt=''></img>
				</div>
				<div className='featuredLabel'>
					<div style={{ display: 'flex', justifyContent: "space-between", margin: "0 20px" }}>
						<div className='featuredText'>
							<span className="contentTitle">{data.title}</span>
							{data.date ?
								<span className="contentDate">{data.date}</span>
								: null
							}

							{/* these are here for sorting, we still want them to be searchable */}
							<span className='contentDesc' style={{ display: "none" }}>{data.description}</span>
							<span className='type' style={{ display: 'none' }}>{data.types}</span>

						</div>
						<span className='iconContainer'>
							{types.map((type: any, key) =>
								<img src={"/assets/icons/" + type.toLowerCase() + ".svg"} className='iconImage' onError={(e) => (e.target as HTMLElement).style.display = "none"} key={key} alt=""></img>
							)}
						</span>

					</div>
				</div>

			</div>
		</a>
	);
}