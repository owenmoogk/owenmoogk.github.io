
import React, { useEffect, useState } from 'react';
import WorkItem from './WorkItem'

export default function Workpage() {

	const [workData, setWorkData] = useState()

	useEffect(() => {
		fetch(process.env.PUBLIC_URL + "/assets/work.json")
			.then(response => response.json())
			.then(json => setWorkData(json))
	}, [])

	return (
		<div className="main">
			<div className="page">
				<p className="title">Work</p>
				<p className='subtitle'>Connect with me on <a href='https://www.linkedin.com/in/owen-moogk-1ab9371b8/' target='_blank' rel='noreferrer'>Linkedin</a></p>
				<div id='workItems'>

					{workData
						? workData.map((data, key) => <WorkItem key={key} data={data}/>)
						: null
					}

				</div>
			</div>
		</div>
	);
}