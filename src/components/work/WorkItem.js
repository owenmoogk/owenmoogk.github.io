export default function WorkItem(props) {

	var data = props.data

	var display = props.active === props.id ? '' : 'none'

	return (
		<div className="workItem">

			<div style={{ display: "flex" }}>
				<div className='graphics'>
					<div className='svg' dangerouslySetInnerHTML={{ __html: data.img }} onClick={props.active === props.id ? () => props.setActive('') : () => props.setActive(props.id)}></div>
					<div className='line' style={{ display: display }}></div>
				</div>

				<div className='text'>
					<div onClick={props.active === props.id ? () => props.setActive('') : () => props.setActive(props.id)}>
						<div className='workTitle'>{data.title}</div>
						{data.subtitle
							? <div className='subtitle'>{data.subtitle} • {data.date}</div>
							: <div className='subtitle'>{data.date}</div>
						}
					</div>
					<div className='content' style={{ display: display }} dangerouslySetInnerHTML={{ __html: data.description }}></div>

					<div style={{ display: display }}>
						{data.ul
							? <ul>
								{data.ul.map((li, key) => <li key={key} dangerouslySetInnerHTML={{ __html: li }}></li>)}
							</ul>
							: null
						}
					</div>

				</div>
			</div>

			{
				data.description
					? <div class='arrow' style={{ marginRight: '40px' }}>
						<svg width="20px" onClick={props.active === props.id ? () => props.setActive('') : () => props.setActive(props.id)} height="20px" style={{ transform: props.active === props.id ? '' : 'rotate(90deg)' }} fill='var(--textColor)' viewBox="0 0 16 16" strokeWidth='5'><path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg>
					</div>
					: null
			}

		</div>
	);
}