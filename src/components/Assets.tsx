import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import global from "../global/global.json"

export default function Assets() {

	interface Asset {
		name: string;
		link: string;
	}

	const [data, setData] = useState<Asset[]>()

	useEffect(() => {
		fetch('./publicAssets.json')
			.then(response => response.json())
			.then(json => {
				var parsedData: Asset[] = [];
				json.forEach((item: any) => {
					parsedData.push({
						name: Object.keys(item)[0],
						link: item[Object.keys(item)[0]]
					})
				})
				setData(parsedData)
			})
	}, [])

	return (
		<div className="main" id='resourcePage'>
			<Helmet>
				<title>{"Assets - Owen Moogk"}</title>
			</Helmet>
			<p className="title">Assets</p>
			<p className='subtitle'>Extra bits, for storage.</p>
			{data ?
				<div className='assets'>
					<ul>
						{data.map((asset, key) => {
							if (asset.name === 'university') {
								return null
							}
							if (!asset.link.startsWith("http", 0)) {
								var link = global.assets + asset.link
							}
							else {
								link = asset.link
							}
							return (
								<li key={key}><a href={link} target='_blank' rel='noreferrer'>{asset.name}</a></li>
							)
						})}
					</ul>
				</div>
				: null
			}
		</div>
	);
}