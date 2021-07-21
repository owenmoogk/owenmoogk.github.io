
import React, { useEffect, useState } from 'react';
import WorkItem from './WorkItem'

export default function Workpage() {

	const [workData, setWorkData] = useState()
	const [activeDropdown, setActiveDropdown] = useState()

	useEffect(() => {
		fetch(process.env.PUBLIC_URL + "/assets/work.json")
			.then(response => response.json())
			.then(json => setWorkData(json))
	}, [])

	return (
		<div className="main">
			<p className="title">Work</p>
			<p className='subtitle'>Connect with me on <a href='https://www.linkedin.com/in/owen-moogk-1ab9371b8/' target='_blank' rel='noreferrer'>LinkedIn</a><br/>or have a look at my <a href='/assets/resume.pdf' target='_blank' rel='noreferrer'>Resume</a></p>
			{workData
				? <div id='workItems'>
					<h1>Experience</h1>
					{workData.experience.map((data, key) => <WorkItem key={key} id={key} data={data} active={activeDropdown} setActive={setActiveDropdown} />)}

					<h1>Education</h1>
					{workData.education.map((data, key) => <WorkItem key={key} id={key+10} data={data} active={activeDropdown} setActive={setActiveDropdown} />)}
					
					<h1>Volunteer Experience</h1>
					{workData.volunteer.map((data, key) => <WorkItem key={key} id={key+20} data={data} active={activeDropdown} setActive={setActiveDropdown} />)}

					<h1>Certifications / Courses</h1>
					{workData.certifications.map((data, key) => <WorkItem key={key} id={key+30} data={data} active={activeDropdown} setActive={setActiveDropdown} />)}
				</div>
				: null
			}
		</div>
	);
}