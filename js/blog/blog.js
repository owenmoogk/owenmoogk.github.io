function loadBlog() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			blog(this);
		}
    };
    xmlhttp.open("GET", "/assets/blog.xml", true);
    xmlhttp.send();
}
function blog(xml) {
    var titles, dates, i, txt, xmlDoc, texts; 
    xmlDoc = xml.responseXML;
    txt = "";
    titles = xmlDoc.getElementsByTagName("title");
    dates = xmlDoc.getElementsByTagName('date');
    texts = xmlDoc.getElementsByTagName('text');
    for (i = 0; i < titles.length; i++) { 
        txt += '<div class="item"><div class="blog-title">'+titles[i].childNodes[0].nodeValue+'</div><div class="date">'+dates[i].childNodes[0].nodeValue+'</div><div class="content">'+texts[i].childNodes[0].nodeValue+'</div></div>';
        if (i+1 != titles.length){
            txt += '<hr class="list-seperate '+i+'">'
        }
    }
    document.getElementById("blogs").innerHTML = txt;
}
// search function. the search bar searches through name and description
function search() {
    var filter = document.getElementById("searchBar").value.toUpperCase(); // input from search bar set to upper case so the serach is not case-senesative
    var blogs = document.getElementById("blogs"); // pulls blogs from html
    var blogItem = blogs.getElementsByClassName("item"); // pulls all the blogitems

    // theses two varibles will hold the title/description of the row we're running through
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
            // if it doesnt itll change its display style in css to "none", which basiclly just hides it
            blogItem[i].style.display = "none";
            hrToHide = document.getElementsByClassName(i)[0]
            hrToHide.style.display = 'none'
        }
    }
}

// sorting function. will sort either by the name or the category. there will be both ascending and descending sorting
// the fuction takes in a value (sortBy). this value index of the thing being sorted in a tablerow, so 0 is name, and 2 is category
function sortBlog(sortBy){
    // variables UwU
    var file = xmlhttp.responseXML;
    var x = file.getElementsByTagName("resource"); // picks out just the resources aka "<resource>"
    let sortedList = []; // initialize a list to be sorted

    // get a sorted list sorted by the sortBy value
    for (i = 0; i < x.length; i++){
        value = x[i].getElementsByTagName(sortBy)[0].childNodes[0].nodeValue // gets the value to push to the list
        sortedList.push(value); // pushed value to list
    }
    sortedList.sort(); // sorts list
    console.log(sortedList); // just for checking :)

    let blogs = [];
    let idsPassed = [];
    for (p = 0; p < sortedList.length; p++) {
        for (w = 0; w < x.length; w++){

            let doContinue = false;

            let title = x[w].getElementsByTagName("title")[0].childNodes[0].nodeValue;
            let category = x[w].getElementsByTagName("category")[0].childNodes[0].nodeValue
            let description = x[w].getElementsByTagName("description")[0].childNodes[0].nodeValue
            let id = x[w].getElementsByTagName("id")[0].childNodes[0].nodeValue

            console.log('firstmaybe')
            for (idCycler = 0; idCycler < idsPassed.length; idCycler++){
                console.log('maybe');
                if (idsPassed[idCycler] == id){
                    doContinue = true;
                    console.log('continuing')
                }
            }
            if (doContinue == true){
                continue;
            }

            if (sortBy == 'title'){
                if (title == sortedList[p]){
                    blogs += "<tr><td>" + title + "</td><td>" + description + "</td><td>" + category + "</td></tr>";
                    idsPassed.push(id);
                    break;
                }
            }
            if (sortBy == 'category'){
                if (category == sortedList[p]){
                    blogs += "<tr><td>" + title + "</td><td>" + description + "</td><td>" + category + "</td></tr>";
                    idsPassed.push(id);
                    break;
                }
            }
        }
    }
    // sets the html inside the empty table we made to be the great table varible we just made
    document.getElementById("demo").innerHTML = table;



    // lastly call search function to show and hide proper ones
    search();
}