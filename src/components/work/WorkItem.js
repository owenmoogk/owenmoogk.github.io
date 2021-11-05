export default function WorkItem(props) {

	var data = props.data
	console.log(data)

	return (
		<div className="workItem">

			<div style={{ display: "flex" }}>
				<div className='graphics'>
					<div className='svg' dangerouslySetInnerHTML={{ __html: data.img }}></div>
					<div className='line'></div>
				</div>

				<div className='text'>
					<div>
						<div className='workTitle'>{data.title}</div>
						{data.subtitle
							? <div>{data.subtitle} • {data.date}</div>
							: <div>{data.date}</div>
						}
					</div>
					{data.description
						? <div className='content'>
							<p dangerouslySetInnerHTML={{ __html: data.description }} />
							<div>
								{data.ul
									? <ul>
										{data.ul.map((li, key) => <li key={key} dangerouslySetInnerHTML={{ __html: li }}></li>)}
									</ul>
									: null
								}
							</div>
						</div>
						: null
					}
				</div>
			</div>
		</div>
	);
}