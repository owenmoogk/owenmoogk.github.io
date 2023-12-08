import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import WorkItem from './WorkItem'
import links from "../../global/links"
import global from "../../global/global"


export default function Workpage() {

	const [workData, setWorkData] = useState()

	useEffect(() => {
		fetch(process.env.PUBLIC_URL + "/assets/work.json")
			.then(response => response.json())
			.then(json => setWorkData(json))
	}, [])

	return (
		<div className="main" id='workPage'>
			<Helmet>
				<title>Work - Owen Moogk</title>
			</Helmet>
			<p className="title">Work</p>
			<p className='subtitle'>Connect with me on <a href={links.linkedIn} target='_blank' rel='noreferrer'>LinkedIn</a><br />or have a look at my <a href={global.resume} target='_blank' rel='noreferrer'>Resume</a></p>
			{workData
				? <div id='workItems'>

					<h1>Experience</h1>
					<div className='workCategory'>
						{workData.experience.map((data, key) => <WorkItem key={key} data={data} />)}
					</div>

					<h1>Education</h1>
					<div className='workCategory'>
						{workData.education.map((data, key) => <WorkItem key={key} data={data} />)}
					</div>

					<h1>Volunteer Experience</h1>
					<div className='workCategory'>
						{workData.volunteer.map((data, key) => <WorkItem key={key} data={data} />)}
					</div>

					<h1>Certifications / Courses</h1>
					<div className='workCategory'>
						{workData.certifications.map((data, key) => <WorkItem key={key} data={data} />)}
					</div>
				</div>
				: null
			}
			<p className='subtitle'>A condensed version of my working documents can be found <a href='/assets'>here</a>.</p>
		</div>
	);
}