import { useState } from "react";

export default function WorkItem(props: any) {

	const [collapsed, setCollapsed] = useState(true)
	var data = props.data

	// parse the dates
	function formatDate(dateString: string) {
		if (!dateString) {
			return "Present"
		}
		const date = new Date(dateString);
		const month = date.toLocaleString('en-US', { month: 'short' });
		const year = date.getFullYear();
		return `${month} ${year}`;
	}

	function getDateString(data: any) {
		if ("startDate" in data && "endDate" in data) {
			const startDate = formatDate(data.startDate)
			const endDate = formatDate(data.endDate)
			return `${startDate} - ${endDate}`
		}
		return formatDate(data.date ? data.date : data.startDate)
	}

	function getTitle(data: any) {
		if ("issuer" in data) {
			return data["name"]
		}
		if ("area" in data) {
			return data.area ? data.area : data.studyType
		}
		return data.position ? data.position : data.title
	}

	function getSubtitle(data: any) {
		if ("issuer" in data) {
			return data.issuer
		}
		if ("name" in data) {
			return data.name
		}
		if ("awarder" in data) {
			return data.awarder
		}
		if ("organization" in data) {
			return data.organization
		}
		if ("institution" in data) {
			return data.institution
		}
		return "--"
	}

	function getSummary(data: any) {
		if (data.summary) {
			return (
				<div className='content' style={{ height: collapsed ? '0' : '' }}>
					<p dangerouslySetInnerHTML={{ __html: data.summary.replaceAll("\n", "<br>").replaceAll("\t", "&nbsp&nbsp") }} />
				</div>
			)
		}
		if (data.url){
			return (
				<div className='content' style={{ height: collapsed ? '0' : '' }}>
					<p><a href={data.url}>Certification</a></p>
				</div>
			)
		}
		return null
	}

	return (
		<div className="workItem">

			{data.summary || data.url
				? <div className='graphics' onClick={() => setCollapsed(!collapsed)}>
					<div className='svg'><svg style={{ transition: '0.3s', transform: !collapsed ? 'rotate(90deg)' : 'rotate(0deg' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg></div>
				</div>
				: <div className='graphics' onClick={() => setCollapsed(!collapsed)}>
					<div className='svg'></div>
				</div>
			}


			<div className='text'>
				<div className="titleBlock" onClick={() => setCollapsed(!collapsed)}>
					<div className='workTitle'>
						<span>{getTitle(data)}</span>
						<span className='workTitleDate'>{getDateString(data)}</span>
					</div>
					{getSubtitle(data)}
				</div>
				{getSummary(data)}
			</div>
		</div>
	);
}