import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import WorkItem from './WorkItem'

export default function Workpage() {

	const [workData, setWorkData] = useState()
	const [activeDropdown, setActiveDropdown] = useState(-1)

	function toggleActive(num) {
		var growDiv = document.getElementById('work'+num);
		if (growDiv.clientHeight) {
			growDiv.style.height = 0;
			setActiveDropdown(-1)
		}
		else {
			var toClose = document.getElementById('work'+activeDropdown)
			if (toClose){
				toClose.style.height = 0
			}

			// enlarge the clicked
			var wrapper = document.querySelector('#measure'+num);
			growDiv.style.height = (wrapper.clientHeight + 10) + "px";
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
			<span className='arrow' style={{ marginRight: '40px' }}>
				<svg width="20px" height="20px" style={{ transform: activeDropdown === num ? '' : 'rotate(-90deg)', transition: '0.3s'}} fill='var(--textColor)' viewBox="0 0 16 16"><path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg>
			</span>
		)

	}

	return (
		<div className="main" id='workPage'>
			<Helmet>
				<title>Work - Owen Moogk</title>
			</Helmet>
			<p className="title">Work</p>
			<p className='subtitle'>Connect with me on <a href='https://www.linkedin.com/in/owen-moogk-1ab9371b8/' target='_blank' rel='noreferrer'>LinkedIn</a><br />or have a look at my <a href='https://owenmoogk.github.io/owenmoogk/resume.pdf' target='_blank' rel='noreferrer'>Resume</a></p>
			{workData
				? <div id='workItems'>

					<h1 onClick={() => toggleActive(0)}>{loadArrow(0)}Experience</h1>
					<div className='workDisplayer' id='work0'>
						<div id='measure0' className='measureDiv'>
							{workData.experience.map((data, key) => <WorkItem key={key} data={data} />)}
						</div>
					</div>

					<h1 onClick={() => toggleActive(1)}>{loadArrow(1)}Education</h1>
					<div className='workDisplayer' id='work1'>
						<div id='measure1' className='measureDiv'>
							{workData.education.map((data, key) => <WorkItem key={key} data={data} />)}
						</div>
					</div>

					<h1 onClick={() => toggleActive(2)}>{loadArrow(2)}Volunteer Experience</h1>
					<div className='workDisplayer' id='work2'>
						<div id='measure2' className='measureDiv'>
							{workData.volunteer.map((data, key) => <WorkItem key={key} data={data} />)}
						</div>
					</div>

					<h1 onClick={() => toggleActive(3)}>{loadArrow(3)}Certifications / Courses</h1>
					<div className='workDisplayer' id='work3'>
						<div id='measure3' className='measureDiv'>
							{workData.certifications.map((data, key) => <WorkItem key={key} data={data} />)}
						</div>
					</div>
				</div>
				: null
			}
			<p className='subtitle'>A condensed version of my working documents can be found <a href='/assets'>here</a>.</p>
		</div>
	);
}