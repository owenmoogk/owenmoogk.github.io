import { useState } from "react";

export default function WorkItem(props) {

	const [collapsed, setCollapsed] = useState(true)
	var data = props.data

	return (
		<div className="workItem">

			<div className='graphics'>
				<div className='svg'><div className="innerSvg"></div></div>
				<div className='line'></div>
			</div>

			<div className='text'>
				<div className="titleBlock" onClick={() => setCollapsed(!collapsed)}>
					<div className='workTitle'>{data.title}</div>
					{data.subtitle
						? <div>{data.subtitle} • {data.date}</div>
						: <div>{data.date}</div>
					}
				</div>
				{data.description
					? <div className='content' style={{ height: collapsed ? '0' : '' }}>
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
	);
}