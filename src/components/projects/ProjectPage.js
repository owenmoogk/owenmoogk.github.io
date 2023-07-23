import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactCompareImage from 'react-compare-image'
import Helmet from "react-helmet"

export default function ProjectPage() {

	const [xmlContent, setXmlContent] = useState()
	var { name } = useParams()
	var projectJson = process.env.PUBLIC_URL + '/assets/projects/' + name +'/' + name + ".json"

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		fetch(projectJson)
			.then(response => response.json())
			.then(json => setXmlContent(json))
			.catch(error => setXmlContent(true))
	}, [])

	function loadBlocks() {

		var blocks = xmlContent.blocks;

		// going through blocks and loading them
		var html = blocks.map((block, key) => {

			if (block.ul) {
				var newArray = []
				for (let num = 0; num < block.ul.length; num++) {
					newArray.push(block.ul[num].replaceAll('<a', "<a target='_blank' rel='noreferrer'"))
				}
				block.ul = newArray
			}
			block.text = block.text ? block.text.replaceAll('<a', "<a target='_blank' rel='noreferrer'") : null

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


					{block.image
						? Array.isArray(block.image)
							? block.image.map((image, key) => <img key={key} src={process.env.PUBLIC_URL + "/assets/projects/" + name + "/" + image} className="img" alt='' />)
							: <img src={process.env.PUBLIC_URL + "/assets/projects/" + name + "/" + block.image} className="img" alt='' />
						: null
					}

					{block.render
						? Array.isArray(block.render)
							? <div style={{ display: 'flex', flexDirection: 'column' }}>{block.render.map((render, key) => <img className="render" key={key} src={process.env.PUBLIC_URL + "/assets/projects/" + name + "/" + render} alt='' />)}</div>
							: <img className="render" key={key} src={process.env.PUBLIC_URL + "/assets/projects/" + name + "/" + block.render} alt='' />
						: null
					}

					{block.video
						? <video src={process.env.PUBLIC_URL + "/assets/projects/" + name + "/" + block.video} controls></video>
						: null
					}

					{block.slider
						? <div className='sliderContainer'>
							<ReactCompareImage leftImage={"/assets/projects/" + name + "/" + block.slider[0]} rightImage={"/assets/projects/" + name + "/" + block.slider[1]} aspectRatio='taller' handle={
								<button style={{
									height: '50px',
									outline: 'none',
									width: '10px',
									border: 'none',
									borderRadius: '5px',
								}}></button>
							} />
							<span className='subtitle'>Move the slider to see inside.</span>
						</div>
						: null
					}

				</div>
			)
		})

		return (html)

	}

	// actual loading process
	function buildProjectPage() {

		if (xmlContent === true){
			return (
				<div id='projectBody' className='main'>
					<div className="title">Could not load page :/</div>
					<p className='subtitle'>Probably still in development</p>
				</div>
			)
		}
		
		return (
			<div id='projectBody' className='main'>

				<Helmet>
					<title>{xmlContent.meta.title} - Owen Moogk</title>
				</Helmet>

				<style dangerouslySetInnerHTML={{
					__html: `
						html, body{
							max-width: 100%;
							overflow-x: hidden;
						}
					`}}></style>

				<div className="title">
					{xmlContent.meta.title}
				</div>
				<p className='subtitle'>{xmlContent.meta.date}</p>
				
				<div id='icons'>

					{xmlContent.meta.githubLink === ""
						? null
						: <a href={xmlContent.meta.githubLink ? xmlContent.meta.githubLink : "https://github.com/owenmoogk/" + name} target="_blank" rel="noreferrer" >
							<svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
							<span className='type' key={key} style={{ border: "2px solid var(--" + type.toLowerCase().replace(/[^a-z]/gi, '') + ",grey)" }}>
								<span className='circle' style={{ backgroundColor: "var(--" + type.toLowerCase().replace(/[^a-z]/gi, '') + ",grey)" }}></span>
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

	return (
		xmlContent
			? buildProjectPage()
			: null
	);
}