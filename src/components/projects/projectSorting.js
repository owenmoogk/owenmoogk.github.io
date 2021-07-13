// function that filters by the type of entry
export function filterProjects(filterBy) {

	// set the all to active, all else to not active
	var current = document.getElementsByClassName("active");
	current[0].className = current[0].className.replace(" active", "");
	var currentButtonClass = "sort_" + filterBy
	
	// make the button active
	var chosenButton = document.getElementsByClassName(currentButtonClass)[0]
	chosenButton.className += ' active'
	
	// loops thru them all tiles
	var entries = document.getElementsByClassName("content");
	for (const tile of entries) {

		if (filterBy === "all") {
			tile.style.display = "";
		}

		else {
			if (tile.className.toLowerCase().includes(filterBy)) {
				tile.style.display = "";
			}
			else {
				tile.style.display = "none";
			}
		}
	}
}

export function search(filter) {
	
	filter = filter.toLowerCase()
	var projectItems = document.getElementsByClassName("content");

	// will run through all the rows
	for (const tile of projectItems) {

		// get the title and type
		var title = tile.getElementsByClassName("content-title")[0].innerText;
		var type = tile.getElementsByClassName("type")[0].innerText;

		if (title.toLowerCase().includes(filter) || type.toLowerCase().includes(filter)) {
			tile.style.display = "";
		}
		else {
			tile.style.display = "none";
		}
	}
}