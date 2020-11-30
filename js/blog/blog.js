// loading the blog xml doc
function loadBlog() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			blog(this);
		}
    };
    xmlhttp.open("GET", "/assets/blog.xml", true);
    xmlhttp.send();
}

// populating the blog page
function blog(xml) {
    
    // variables
    var titles, dates, i, txt, xmlDoc, texts; 
    xmlDoc = xml.responseXML;
    txt = "";
    titles = xmlDoc.getElementsByTagName("title");
    dates = xmlDoc.getElementsByTagName('date');
    texts = xmlDoc.getElementsByTagName('text');

    // looping throught the elements and appending to text
    for (i = 0; i < titles.length; i++) {
        var exitLoop = false

        // turn ~~ into breaks
        while (exitLoop == false){
            texts[i].childNodes[0].nodeValue = texts[i].childNodes[0].nodeValue.replace('~~','<br>')
            var searchReturn = texts[i].childNodes[0].nodeValue.search('~~')
            if (searchReturn == -1){
                exitLoop = true
            }
        }
        txt += '<div class="item"><div class="text"><div class="blog-title">'+titles[i].childNodes[0].nodeValue+'</div><div class="date">'+dates[i].childNodes[0].nodeValue+'</div><div class="content">'+texts[i].childNodes[0].nodeValue+'</div></div>';
        if (i+1 != titles.length){
            txt += '<hr class="list-seperate">'
        }
        txt += '</div>'
    }
    document.getElementById("blogs").innerHTML = txt;
}
// search function. the search bar searches through name, title, and description
function search() {
    var filter = document.getElementById("searchBar").value.toUpperCase(); // input from search bar set to upper case so the serach is not case-sensitive
    var blogs = document.getElementById("blogs"); // pulls blogs from html
    var blogItem = blogs.getElementsByClassName("item"); // pulls all the blogitems

    // theses three varibles will hold the title/description of the row we're running through
    var title, description, date; 

    // will run throuhg all the rows
    for (i = 0; i < blogItem.length; i++) {
        title = blogItem[i].getElementsByClassName("blog-title")[0].innerText; // pulls first entry (aka the title) of row "i"
        description = blogItem[i].getElementsByClassName("content")[0].innerText; // pulls second entry (aka description) of row "i"
        date = blogItem[i].getElementsByClassName("date")[0].innerText;
        // checks if the title or description matches the filter (search bar input)
        if (title.toUpperCase().indexOf(filter) > -1 || description.toUpperCase().indexOf(filter) > -1 || date.toUpperCase().indexOf(filter) > -1) {
            // if it does, it'll just leave it alone
            blogItem[i].style.display = "";
            hrToShow = document.getElementsByClassName(i)[0]
            hrToShow.style.display = ''
        }
        else {
            // if it doesnt it'll change its display style in css to "none", which basiclly just hides it
            blogItem[i].style.display = "none";
            hrToHide = document.getElementsByClassName(i)[0]
            hrToHide.style.display = 'none'
        }
    }
}

function sortBlog(sortBy) {
    var row = document.getElementById("blogs").getElementsByClassName('item'); // this pulls all the rows of the table we're sorting
    var rowNum; // well we're running through all the rows, this will hold the number of the row we want to switch
    var order = "asc"; // this hold whether we're sorting in an ascending(asc) or descending(desc) order, we'll set defualt to ascendign
    var switching = true; // this will tell the main while loop weather to keep running through the rows or not
    var shouldSwitch; // this var will hold whether or not a switch between two rows needs to be made in the table
    var switchCount = 0; // this shows the number of switchs made, starts with 0
    var currentRow; // will hold the plain data of the current row compared
    var nextRow; // wil hold the plain  data of the row next to the current one
    console.log(row[1])
    if (sortBy == 'date-asc'){
        order = 'asc'
        sortBy = 'date'
    }
    if (sortBy == 'date-desc'){
        order = 'desc'
        sortBy = 'date'
    }
    // the while loop will keep running through the rows and seeing if they need switching
    while (switching) {
        // set it that there is no switching done, this may be changed later
        switching = false;
        
        // loop through all the rows in the table (row.length - 1 is needed as if we're at the last row, there is no next row)
        for(rowNum = 0; rowNum < (row.length - 1); rowNum++) {
            // state that there is need for switching at the moment
            shouldSwitch = false;
            // compare the current and next row, and see if they are in the order you're sorting by. the "sortBy" pulls the coloum we're sorting by
            currentRow = row[rowNum].getElementsByClassName(sortBy)[0];
            nextRow = row[rowNum + 1].getElementsByClassName(sortBy)[0];
            // check if the rows compared need to switch places, based on the order (will first put both to upper case)
            if (order == "asc") {   
                if (currentRow.innerHTML.toUpperCase() > nextRow.innerHTML.toUpperCase()) {
                    // if this is true, mark it as a switch and break the loop to move to switching
                    shouldSwitch = true;
                    break;
                }
            }
            else if (order == "desc") {
                if (currentRow.innerHTML.toUpperCase() < nextRow.innerHTML.toUpperCase()) {
                    // if this is true, mark it as a switch and break the loop to move to switching
                    shouldSwitch = true;
                    break;
                }
            }
        }

        // if a switch has been marked, it will change the places of the rows 
        if (shouldSwitch) {
            row[rowNum].parentNode.insertBefore(row[rowNum + 1], row[rowNum]);
            // now mark that switching has been down and increase the switch count by 1
            switching = true;
            switchCount++;
        }
        // on the other hand, if no switching has been done, that meaning we're ordering in the wrong way, and we switch the order
        // this could be more efficient by having a global varible telling if it was asc or desc, but this is more reliable and less messy
        else {
            if (switchCount == 0 && order == "asc") {
                order = "desc";
                switching = true;
            }
        }
    }
}