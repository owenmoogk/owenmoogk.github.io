import { useState } from "react";

export default function WorkItem(props) {

	const [collapsed, setCollapsed] = useState(true)
	var data = props.data

	return (
		<div className="workItem">

			<div className='graphics' onClick={() => setCollapsed(!collapsed)}>
				<div className='svg'><svg style={{transition: '0.3s', transform: !collapsed ? 'rotate(90deg)' : 'rotate(0deg'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg></div>
			</div>

			<div className='text'>
				<div className="titleBlock" onClick={() => setCollapsed(!collapsed)}>
					<div className='workTitle'>
						<span>{data.title}</span>
						<span className='workTitleDate'>{data.date}</span>
					</div>
					{data.subtitle
						? <div>{data.subtitle}</div>
						: <div>--</div>
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