import { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import WorkItem from './WorkItem'
import links from "../../global/links.json"
import global from "../../global/global.json"

export default function Workpage() {

	const [workData, setWorkData] = useState<any>()

	const categories = [
		"Work",
		"Awards",
		"Certificates",
		"Volunteer",
		"Education",
	]

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
						{categories.map((category: string, key: number) => {
							var sectionData = workData[category.toLowerCase()]
							return(
								<div key={key}>
									<h1>{category}</h1>
									<div className='workCategory' key={key}>
										{sectionData.map((item: any, itemKey: number) => {
											return(
												<WorkItem key={itemKey} data={item} />
											)
										})}
									</div>
								</div>
							)
						})}
						</div>
				: null
			}
			<p className='subtitle'>A condensed version of my working documents can be found <a href='/assets'>here</a>.</p>
			<p className='subtitle'>And for anyone really curious: <a href={global.extracurriculars} target="_blank">everything I've ever done</a>.</p>
		</div>
	);
}