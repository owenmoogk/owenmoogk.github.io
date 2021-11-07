import { useEffect, useState } from "react";

export default function Resources() {

	const [data, setData] = useState()

	useEffect(() => {
		fetch('./publicAssets.json')
			.then(response => response.json())
			.then(json => setData(json))
	})

	return (
		<div className="main" id='resourcePage'>
			<p className="title">Assets</p>
			<p className='subtitle'>Extra bits, for storage (and a little brag)</p>
			{data ?
				<ul>
					{data.map((item, key) => {
						var itemName = Object.keys(item)
						var link = item[itemName]
						return (
							<li key={key}><a href={link} target='_blank' rel='noreferrer'>{itemName}</a></li>
						)
					})}
				</ul>
				: null
			}

		</div>
	);
}