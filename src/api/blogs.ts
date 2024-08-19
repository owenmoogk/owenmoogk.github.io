export type BlogPost = {
  title: string;
  link: string;
  date: Date;
  content: string;
};

const corsProxy = 'https://cors.eu.org/';
const url = 'https://medium.com/feed/@owenmoogk';

export async function getBlogs() {
  const response = await fetch(corsProxy + url);
  const text = await response.text();
  const xml = new window.DOMParser().parseFromString(text, 'text/xml');

  const posts: BlogPost[] = [];
  for (const post of xml.getElementsByTagName('item')) {
    const postObject: BlogPost = {
      title: post.getElementsByTagName('title')[0].textContent ?? '',
      link: post.getElementsByTagName('link')[0].textContent ?? '',
      date: new Date(Date.parse((post.getElementsByTagName('pubDate')[0] as HTMLElement).textContent ?? '')),
      content: new window.DOMParser().parseFromString((post.getElementsByTagName('content:encoded')[0] as HTMLElement).textContent?.replaceAll('<br>', ' ').replaceAll('</p><p>', ' ') ?? '', 'text/html').body.innerText,
    };
    // cut off the content at the end of a word, and add ...
    let cutoffIndex = 300;
    while (postObject.content[cutoffIndex] !== ' ') {
      cutoffIndex -= 1;
    }
    postObject.content = postObject.content.substring(0, cutoffIndex);
    postObject.content += '...';

    posts.push(postObject);
  }
  return posts;
}
