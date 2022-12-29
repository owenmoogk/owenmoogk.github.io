import { useEffect, useState } from "react";
import Helmet from "react-helmet";

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
			<p className='subtitle'>Extra bits, for storage (and a little brag)</p>
			{data ?
				<ul>
					{data.map((item, key) => {
						var itemName = Object.keys(item)
						console.log(itemName)
						var link = 'https://owenmoogk.github.io/owenmoogk/'+item[itemName]
						if (itemName[0] === 'university'){
							return null
						}
						return (
							<li key={key}><a href={link} target='_blank' rel='noreferrer'>{itemName}</a></li>
						)
					})}
				</ul>
				: null
			}
			{/* <p className='subtitle'>Universities</p>
			{data ?
				<ul>
					{data.map((item, key) => {
						var itemName = Object.keys(item)
						if (itemName[0] === 'university'){
							return(
								item.university.map((uniItem, key) => {
									if (!uniItem){
										return(
											<br/>
										)
									}
									var itemName = Object.keys(uniItem)
									console.log(itemName)
									var link = 'https://owenmoogk.github.io/owenmoogk/'+uniItem[itemName]
									return (
										<li key={key}><a href={link} target='_blank' rel='noreferrer'>{itemName}</a></li>
									)
								})
							)
						}
						return null					
					})}
				</ul>
				: null
			} */}
			
		</div>
	);
}