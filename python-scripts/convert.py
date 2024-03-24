import json
import re
import os

def convert_links_and_linebreaks(text):
    # Convert <br> tags to line breaks without adding extra spaces
    text = re.sub(r"\s*(<br\s*\/?>)\s*", "\n", text)
    
    # Remove leading and trailing whitespace
    text = text.strip()
    
    # Convert <a> tags to Markdown links
    text = re.sub(r"<a\s+(?:[^>]*?\s+)?href=(['\"])(.*?)\1[^>]*>(.*?)</a>", r"[\3](\2)", text)
    
    return text


def json_blocks_to_markdown(blocks):
    markdown_text = ""

    for block in blocks:
        if "title" in block:
            markdown_text += f"# {block['title']}\n\n"
        if "text" in block:
            markdown_text += f"{convert_links_and_linebreaks(block['text'])}\n\n"
        
        if "video" in block:
            markdown_text += f"<video src='{block["video"]}'></video>\n\n"

        if "slider" in block:
            markdown_text += f"#### {block["slider"][0]},{block["slider"][1]}\n\n"

        if 'image' in block:
            if isinstance(block["image"], str):
                if "title" in block:
                    markdown_text += f"![{block['title']} Image]({block['image']})\n\n"
                else:    
                    markdown_text += f"![]({block['image']})\n\n"
                
            else:
                for image in block["image"]:
                    if "title" in block:
                        markdown_text += f"![{block['title']} Image]({image})\n\n"
                    else:
                        markdown_text += f"![]({image})\n\n"
        
        if "render" in block:
            if isinstance(block["render"], str):
                if "title" in block:
                    markdown_text += f"![{block['title']} Image]({block['render']})\n\n"
                else:    
                    markdown_text += f"![]({block['render']})\n\n"
                
            else:
                for image in block["render"]:
                    if "title" in block:
                        markdown_text += f"![{block['title']} Image]({image})\n\n"
                    else:
                        markdown_text += f"![]({image})\n\n"
        
        if 'ul' in block:
            ul_list = block['ul']
            # Convert <a> tags within <ul> list to Markdown links
            ul_list = [re.sub(r"<a\s+href=[\'\"](.*?)[\'\"]>(.*?)</a>", r"[\2](\1)", item) for item in ul_list]
            markdown_text += "\n".join([f"* {li}" for li in ul_list]) + "\n\n"

    
    return markdown_text

def convertProjectFile(projectName):
    # Load JSON data
    json_file_path = "public/assets/projects/" + projectName + "/" + projectName + '.json'
    if not os.path.exists(json_file_path):
        return
    with open(json_file_path, 'r') as json_file:
        json_data = json.load(json_file)

    # Extract 'blocks', convert links and line breaks, and convert to Markdown
    markdown_content = json_blocks_to_markdown(json_data['blocks'])

    # Write Markdown content to a file
    markdown_file_path = "public/assets/projects/" + projectName + "/" + projectName + '.md'
    with open(markdown_file_path, 'w') as markdown_file:
        markdown_file.write(markdown_content)

    print("Markdown file created successfully.")

    # # Remove 'blocks' from JSON data
    # del json_data['blocks']
    # # Write modified JSON data back to the file
    # with open(json_file_path, 'w') as json_file:
    #     json.dump(json_data, json_file)

    # print("Blocks removed from JSON file.")

# convertProjectFile("2702-2020")


project_folders = os.listdir("public/assets/projects/")

# Loop through each folder
for project_folder in project_folders:
    convertProjectFile(project_folder)
