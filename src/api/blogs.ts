import { load as ymlLoad } from 'js-yaml';

import { blogLink } from '@global/global';

export type BlogPost = {
  title: string;
  file_name: string;
  markdownLink: string;
  date: Date;
  tags: string[];
  image: string;
};

type APIBlogPost = {
  date: string;
  title: string;
  tags: string[];
  image: string;
  file_path: string;
  file_name: string;
};

export async function getBlogs() {
  const response = await fetch(blogLink + '/metadata.json');
  const json = (await response.json()) as APIBlogPost[];
  const posts: BlogPost[] = [];
  json.forEach((post) => {
    const { file_path, date, ...postData } = post;
    const newPost = {
      ...postData,
      // eslint-disable-next-line camelcase
      markdownLink: file_path,
      date: new Date(date),
    };
    posts.push(newPost);
  });
  // sorting so newest are first
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return posts;
}

export async function getBlog(name: string) {
  const response = await fetch(
    'https://owenmoogk.github.io/blogs/blogs/' + name + '.md'
  );
  const text = await response.text();
  const { frontmatter, content } = extractFrontmatter(text);
  const blog = frontmatter as unknown as BlogPost;
  return { content, blog };
}

function extractFrontmatter(markdown: string) {
  const frontmatterMatch = markdown.match(/^---[\s\S]*?---/);
  const json: { [key: string]: unknown } = {}; // Use `any` to accommodate various data types
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[0];
    const content = markdown.slice(frontmatter.length).trim();

    // Extract frontmatter content
    const frontmatterContent = frontmatter
      .replace(/^---\n/, '')
      .replace(/\n---$/, '');

    // Parse YAML frontmatter to JSON
    const parsedFrontmatter = ymlLoad(frontmatterContent);
    Object.assign(json, parsedFrontmatter);

    return { frontmatter: json, content };
  }
  // No frontmatter found
  return { frontmatter: null, content: markdown };
}

export function parseMarkdown(content: string) {
  function removeFirstLine(content: string) {
    const lines = content.split('\n');
    lines.shift(); // Remove the first line (the title is already displayed)
    return lines.join('\n');
  }

  function fixRelativeLinks(content: string) {
    const imageRegex = /!\[.*?\]\(([^)]+)\)/g;

    // Replace the relative image links with absolute URLs
    content = content.replace(imageRegex, (match, p1: string) => {
      // Check if the link is already absolute
      if (p1.startsWith('http') || p1.startsWith('https')) {
        return match; // Return as is if it's already absolute
      }
      // Otherwise, prepend the base URL
      return match.replace(p1, blogLink + p1);
    });
    content = content.replaceAll('..', '');
    return content;
  }
  content = removeFirstLine(content);
  content = fixRelativeLinks(content);
  return content;
}
