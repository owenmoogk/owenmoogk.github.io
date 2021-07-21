export default function WorkItem(props) {

	var data = props.data

	return (
		<div className="workItem">

			<div className='graphics'>
				<div className='svg' dangerouslySetInnerHTML={{__html:data.img}}></div>
				<div className='line'></div>
			</div>

			<div className='text'>
				<div className='workTitle'>{data.title}</div>
				{data.subtitle
					? <div className='subtitle'>{data.subtitle} • {data.date}</div>
					: <div className='subtitle'>{data.date}</div>
				}
				<div className='content' dangerouslySetInnerHTML={{__html: data.description}}></div>

				{data.ul
					? <ul>
						{data.ul.map((li, key) => <li key={key} dangerouslySetInnerHTML={{__html: li}}></li>)}
					</ul>
					: null
				}

			</div>

		</div>
	);
}