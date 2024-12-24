// function that filters by the type of entry
export function filterProjects(filterBy) {

	// set the all to active, all else to not active
	var current = document.getElementsByClassName("active");
	current[0].className = current[0].className.replace(" active", "");
	var currentButtonClass = "sort_" + filterBy
	var chosenButton = document.getElementsByClassName(currentButtonClass)[0]
	chosenButton.className += ' active'

	// pulls all entries
	var entries = document.getElementsByClassName("content");

	// loops thru them all
	for (var i = 0; i < entries.length; i++) {

		// if we're filtering by "all" we need to show all
		if (filterBy === "all") {
			entries[i].style.display = "";
		}

		// if we're filtering anything else, then ...
		else {
			// gets the p element holding the type
			var type = entries[i].getElementsByClassName("type")[0];

			// if it matchs what we are filtering by it stays
			if (type.innerHTML.toString().toLowerCase() === filterBy) {
				entries[i].style.display = "";
			}
			// else it will just be gone
			else {
				entries[i].style.display = "none";
			}
		}
	}
}

export function search() {
	// input from search bar set to upper case so the serach is not case-sensitive
	var filter = document.getElementById("searchBar").value.toUpperCase();
	// pulls blogs from html
	var projects = document.getElementById("projectsGoHere");
	// pulls all the blogitems
	var projectItems = projects.getElementsByClassName("content");

	// will run throuhg all the rows
	for (var i = 0; i < projectItems.length; i++) {

		// get the title and type
		var title = projectItems[i].getElementsByClassName("content-title")[0].innerText;
		var type = projectItems[i].getElementsByClassName("type")[0].innerText;

		if (title.toUpperCase().indexOf(filter) > -1 || type.toUpperCase().indexOf(filter) > -1) {
			// if it does, it'll just leave it alone
			projectItems[i].style.display = "";
		}
		else {
			// if it doesnt it'll hides it
			projectItems[i].style.display = "none";
		}
	}
}