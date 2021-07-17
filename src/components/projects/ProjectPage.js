import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

export default function ProjectPage() {

	const [xmlContent, setXmlContent] = useState()
	var { name } = useParams()
	var xmlFileLink = process.env.PUBLIC_URL + '/assets/projects/' + name + ".json"

	// the function called when loading page
	function loadProjectPage() {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				setXmlContent(JSON.parse(this.response))
			}
		};
		xmlhttp.open("GET", xmlFileLink, true);
		xmlhttp.send();
	}

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		loadProjectPage()
	}, [])

	function loadBlocks() {

		var blocks = xmlContent.blocks;

		// going through blocks and loading them
		var html = blocks.map((block, key) => {
			return (
				<div className='block' key={key}>

					<div className='text'>
						{block.title
							? <h1>{block.title}</h1>
							: null
						}
						{block.text
							? <p dangerouslySetInnerHTML={{ __html: block.text }}></p>
							: null
						}
					</div>

					{block.image
						? Array.isArray(block.image)
							? block.image.map((image, key) => <img key={key} src={process.env.PUBLIC_URL + "/img/projects/" + name + "/" + image} className="img" alt='' />)
							: <img src={process.env.PUBLIC_URL + "/img/projects/" + name + "/" + block.image} className="img" alt='' />
						: null
					}

					{block.render
						? Array.isArray(block.render)
							? block.render.map((render, key) => <img className="render" key={key} src={process.env.PUBLIC_URL + "/img/projects/" + name + "/" + render} alt='' />)
							: <img className="render" key={key} src={process.env.PUBLIC_URL + "/img/projects/" + name + "/" + block.render} alt='' />
						: null
					}

					{block.video
						? <video src={process.env.PUBLIC_URL + "/img/projects/" + name + "/" + block.video} controls></video>
						: null
					}

					{block.iframe
						? block.iframe
						: null
					}

					{block.ul
						? <ul>
							{block.ul.map((li, key) => {
								return (
									<li key={key} dangerouslySetInnerHTML={{ __html: li }}></li>
								)
							})}
						</ul>
						: null
					}

				</div>
			)
		})

		return (html)

	}

	// actual loading process
	function buildProjectPage() {
		return (
			<div id='projectBody'>

				<div className="title">
					{xmlContent.meta.title}
					<hr />
				</div>

				<div id='icons'>

					{xmlContent.meta.githubLink === ""
						? null
						: <a href={xmlContent.meta.githubLink ? xmlContent.meta.githubLink : "https://github.com/owenmoogk/" + name} target="_blank" rel="noreferrer" >
							<svg className='projectSvg' viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</a>
					}

					{xmlContent.meta.externalLink
						? <a href={xmlContent.meta.externalLink} target='_blank' rel='noreferrer'>
							<svg viewBox="0 0 24 24" className='projectSvg'>
								<g fill="none">
									<path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</g>
							</svg>
						</a>
						: null
					}

					{xmlContent.meta.type.split(' ').map((type, key) => {
						return (
							<span className='type' key={key} style={{ border: "2px solid var(--" + type.toLowerCase() + ",grey)" }}>
								<span className='circle' style={{ backgroundColor: "var(--" + type.toLowerCase() + ",grey)" }}></span>
								{type}
							</span>
						)
					})}
				</div>

				<div id='blocks'>
					{loadBlocks()}
				</div>

			</div>
		)
	}

	// set all the project links to be external
	window.onload = () => {
		var links = document.getElementById('blocks').getElementsByTagName('a')
		for (const link of links) {
			if (!link.target){
				link.target = '_blank'
				link.rel = 'noreferrer'
			}
		}
	};

	return (
		xmlContent
			? buildProjectPage()
			: <div><h1 style={{ paddingTop: '100px' }}>Could not load page :/</h1>
				<p>Probably still in development</p>
			</div>
	);
}