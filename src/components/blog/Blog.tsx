import {
	Routes,
	Route
} from 'react-router-dom';
import Helmet from 'react-helmet';
import { useEffect, useState } from 'react';

export type BlogPost = {
	title: string;
	link: string;
	date: Date;
	content: string;
}

export default function Blog() {

	const corsProxy = "https://cors.eu.org/";
	const url = "https://medium.com/feed/@owenmoogk";
	const [blogData, setBlogData] = useState<BlogPost[]>()

	async function getBlogs(){
			fetch(corsProxy + url)
			.then((res) => res.text())
			.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
			.then(data => {
				var posts: BlogPost[] = []
				for (var post of data.getElementsByTagName("item")){
					console.log((post.getElementsByTagName("content:encoded")[0] as HTMLElement).textContent)
					var postObject = {
						title: post.getElementsByTagName("title")[0].textContent,
						link: post.getElementsByTagName("link")[0].textContent,
						date: new Date(Date.parse((post.getElementsByTagName("pubDate")[0] as HTMLElement).textContent || "")),
						content: new window.DOMParser().parseFromString((post.getElementsByTagName("content:encoded")[0] as HTMLElement).textContent?.replace("<br>", " ").replace("</p>", " ") || "", "text/html").body.innerText,
					} as BlogPost
					posts.push(postObject)
				}
				setBlogData(posts)
			})
	}

	useEffect(() => {
		getBlogs()
	}, [])

	return (
		<div className="main">
			<Helmet>
				<title>{"Blog - Owen Moogk"}</title>
			</Helmet>
			<p className="title">Blog</p>
			<div id='blogPage'>
			{
				blogData?.map((post, key) => 
					<BlogItem post = {post} key = {key}/>
				)
			}
			</div>
		</div>
	);
}

function BlogItem(props:{
	post: BlogPost
}) {

	function formatDate(date: Date) {
    // Define months array for formatting
    var months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];

    // Extract date components
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();

    // Format the date string
    var formattedDate = month + " " + day + ", " + year;

    return formattedDate;
	}

	var post = props.post
	return (
		<div className="blogPost">
			<h3><a href={post.link} className="postTitle" target='_blank' rel='noreferrer'>{post.title}</a></h3>
			<p className="subtitle">{formatDate(post.date)}</p>
			<p className="blogContent">{post.content.substring(0, 350)}...  &nbsp; <a href={post.link} target="_blank" rel='noreferrer'>continue on Medium</a></p>
		</div>
	)
}