import json
import os

def updateProjectJson(project):

	# Read the JSON file
	with open("public/assets/projects/" + project + "/" + project + ".json", 'r') as file:
		data = json.load(file)

	# Remove the "blocks" key from the JSON data
	if 'blocks' in data:
		del data['blocks']

	# Write the modified JSON data back to the same file
	with open("public/assets/projects/" + project + "/" + project + ".json", 'w') as file:
		json.dump(data, file, indent=4)



project_folders = os.listdir("public/assets/projects/")

# Loop through each folder
for project_folder in project_folders:
	try:
		updateProjectJson(project_folder)
	except:
		print(project_folder)
