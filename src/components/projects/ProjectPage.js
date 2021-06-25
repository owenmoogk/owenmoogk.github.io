import React from 'react';
import {useParams} from 'react-router-dom'
import 'css/projects/project-pages.css'

export default function ProjectIcon() {

	// the function called when loading page
	function loadProjectPage(xmlPage, name) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState === 4 && this.status === 200) {
				projectPage(this, name);
			}
		};
		xmlhttp.open("GET", xmlPage, true);
		xmlhttp.send();
	}

	// actual loading process
	function projectPage(xml, name) {

		// xml doxument
		var xmlDoc = JSON.parse(xml.response)['page'];

		// entire html of page
		var txt = "";

		// load header of page
		try{
			var pageTitle = xmlDoc['page-head']['page-title']
		}
		catch(err){
			document.getElementsByClassName("body")[0].innerHTML = '<h2>Page not found</h2>';
			return
		}
		
		var date = xmlDoc['page-head']['date']
		txt += '<div class="project-page-title"><p style="line-height: 70px;">'+pageTitle+'</p></div><div class="date"><p class="pdate">'+date+'</p></div>';


		// load main part of the page
		var blocks = xmlDoc.block;

		// loading the main part of the page
		for (var currBlockNum = 0; currBlockNum < blocks.length; currBlockNum++) {
			
			// the elements inside the current block
			var currBlock = blocks[currBlockNum] 

			txt += '<div class="block">'

			// appending text to var 'txt' depending on tag name
			if (currBlock.title){
				txt += '<div class="text"><h1 class="left">'+currBlock.title+'</h1>'
			}
			if (currBlock.text){

				var currentText = '<p class="left">'

				if (typeof currBlock.text == 'string'){
					currentText += currBlock.text
				}
				else{
					for (const i of currBlock.text){
						// if its a dict then its a link
						if (i.constructor === Object){
							currentText += '<a href="'+i.href+'" class="blinks" target="_blank"> '+i.text+" </a>"
						}
						else{
							currentText += i
						}
					}
				}
				currentText += '</p></div>'
				txt += currentText
			}
			if (currBlock.image){
				if (Array.isArray(currBlock.image)){
					for (const image of currBlock.image){
						txt += '<div class="img"><img src="'+process.env.PUBLIC_URL+"/img/projects/"+name+"/"+image+'" class="img"></div>'
					}
				}
				else{
					txt += '<div class="img"><img src="'+process.env.PUBLIC_URL+"/img/projects/"+name+"/"+currBlock.image+'" class="img"></div>'
				}
			}
			if (currBlock.render){
				if (Array.isArray(currBlock.render)){
					for (const render of currBlock.render){
						txt += '<div class="render"><img src="'+process.env.PUBLIC_URL+"/img/projects/"+name+"/"+render+'" class="img"></div>'
					}
				}
				else{
					txt += '<div class="render"><img src="'+process.env.PUBLIC_URL+"/img/projects/"+name+"/"+currBlock.render+'" class="img"></div>'
				}
			}
			if (currBlock.ul){
				txt += '<ul>'

				for (const i of currBlock.ul){
					txt += '<li>'
					// if its a dict then its a link
					if (i.constructor === Object){
						txt += '<a href="'+i.href+'" class="blinks" target="_blank"> '+i.text+" </a>"
					}
					else{
						txt += i
					}
					txt += '</li>'
				}

				txt += "</ul>"
			}

			if (currBlock.video){
				if (Array.isArray(currBlock.video)){
					txt += '<br>'
					for (const video of currBlock.video){
						txt += '<video src="'+process.env.PUBLIC_URL+"/img/projects/"+name+"/"+video+'"width=300px controls></video>'
					}
				}
				else{
					txt += '<br><video src="'+process.env.PUBLIC_URL+"/img/projects/"+name+"/"+currBlock.video+'"width=250px controls></video>'
				}
			}

			if (currBlock.iframe){
				txt += currBlock.iframe
				console.log(currBlock.iframe)
			}

			// add options for links
			
			txt += '</div>' // close out block div

		}
		document.getElementsByClassName("body")[0].innerHTML = txt;
	}

	// passed in from the router
	var {name} = useParams()
	var xmlFileLink = process.env.PUBLIC_URL + '/assets/projects/'+name+".json"

	return (
		<div className="body">
			{
				loadProjectPage(xmlFileLink, name) ?
				<div>hi</div>:
				<div>else</div>
			}
		</div>
	);
}