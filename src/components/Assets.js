import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import global from "global/global"

export default function Resources() {

	const [data, setData] = useState()

	useEffect(() => {
		fetch('./publicAssets.json')
			.then(response => response.json())
			.then(json => setData(json))
	}, [])

	return (
		<div className="main" id='resourcePage'>
			<Helmet>
				<title>Assets - Owen Moogk</title>
			</Helmet>
			<p className="title">Assets</p>
			<p className='subtitle'>Extra bits, for storage.</p>
			{data ?
			<div className='assets'>
				<ul>
					{data.map((item, key) => {
						var itemName = Object.keys(item)
						if (itemName[0] === 'university'){
							return null
						}
						if (itemName.length === 0)
						{
							return <br/>
						}
						if(!item[itemName].startsWith("http", 0)){
							var link = global.assets+item[itemName]
						}
						else{
							link = item[itemName]
						}
						return (
							<li key={key}><a href={link} target='_blank' rel='noreferrer'>{itemName}</a></li>
						)
					})}
				</ul>
				</div>
				: null
			}			
		</div>
	);
}