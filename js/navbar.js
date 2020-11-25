function loadMenuItems() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			menuItems(this);
		}
    };
    xmlhttp.open("GET", "/assets/menu-items.xml", true);
    xmlhttp.send();
}
function menuItems(xml) {
    var titles, links, i, txt, xmlDoc; 
    xmlDoc = xml.responseXML;
    txt = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
    titles = xmlDoc.getElementsByTagName("title");
    links = xmlDoc.getElementsByTagName('link');
    for (i = 0; i < titles.length; i++) { 
        txt += '<a href = '+links[i].childNodes[0].nodeValue+' class = "navlinks">'+titles[i].childNodes[0].nodeValue+'</a>';
    }
    txt += '<div id="nav-button"></div>'
    document.getElementById('nav').innerHTML = txt
}

// modal stuff

function navButton(){
    var modal = document.getElementById("myModal");
    var button = document.getElementById("nav-button");
    var span = document.getElementsByClassName("close")[0];
    console.log(button)
    button.onclick = function() {
        modal.style.display = "block";
        console.log('ello')
    }
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }
}
