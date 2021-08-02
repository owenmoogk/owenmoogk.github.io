
import React, { useEffect, useState } from 'react';
import WorkItem from './WorkItem'

export default function Workpage() {

	const [workData, setWorkData] = useState()
	const [activeDropdown, setActiveDropdown] = useState()

	function toggleActive(num) {
		if (num === activeDropdown) {
			setActiveDropdown(-1)
		}
		else {
			setActiveDropdown(num)
		}
	}

	useEffect(() => {
		fetch(process.env.PUBLIC_URL + "/assets/work.json")
			.then(response => response.json())
			.then(json => setWorkData(json))
	}, [])

	function loadArrow(num) {
		return (
			<span class='arrow' style={{ marginRight: '40px' }}>
				<svg width="20px" height="20px" style={{ transform: activeDropdown === num ? '' : 'rotate(-90deg)' }} fill='var(--textColor)' viewBox="0 0 16 16"><path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg>
			</span>
		)

	}

	return (
		<div className="main">
			<p className="title">Work</p>
			<p className='subtitle'>Connect with me on <a href='https://www.linkedin.com/in/owen-moogk-1ab9371b8/' target='_blank' rel='noreferrer'>LinkedIn</a><br />or have a look at my <a href='/assets/resume.pdf' target='_blank' rel='noreferrer'>Resume</a></p>
			{workData
				? <div id='workItems'>

					<h1 onClick={() => toggleActive(0)}>{loadArrow(0)}Experience</h1>
					<div style={{ display: activeDropdown === 0 ? '' : 'none' }}>
						{workData.experience.map((data, key) => <WorkItem key={key} data={data} />)}
					</div>

					<h1 onClick={() => toggleActive(1)}>{loadArrow(1)}Education</h1>
					<div style={{ display: activeDropdown === 1 ? '' : 'none' }}>
						{workData.education.map((data, key) => <WorkItem key={key} data={data} />)}
					</div>

					<h1 onClick={() => toggleActive(2)}>{loadArrow(2)}Volunteer Experience</h1>
					<div style={{ display: activeDropdown === 2 ? '' : 'none' }}>
						{workData.volunteer.map((data, key) => <WorkItem key={key} data={data} />)}
					</div>

					<h1 onClick={() => toggleActive(3)}>{loadArrow(3)}Certifications / Courses</h1>
					<div style={{ display: activeDropdown === 3 ? '' : 'none' }}>
						{workData.certifications.map((data, key) => <WorkItem key={key} data={data} />)}
					</div>
				</div>
				: null
			}
		</div>
	);
}