//load menu items (navbar)

function loadMenuItems() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			menuItems(this);
		}
    };
    xmlhttp.open("GET", "assets/index/menu-items.xml", true);
    xmlhttp.send();
}
function menuItems(xml) {
    var titles, links, i, txt, xmlDoc; 
    xmlDoc = xml.responseXML;
    txt = "";
    titles = xmlDoc.getElementsByTagName("title");
    links = xmlDoc.getElementsByTagName('link');
    for (i = 0; i < titles.length; i++) { 
        txt += '<a href = '+links[i].childNodes[0].nodeValue+' class = "navlinks">'+titles[i].childNodes[0].nodeValue+'</a> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
    }
    document.getElementById("navBox").innerHTML = txt;
}

//load slideshow

function loadSlideshow(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        slideshow(this);
      }
    };
    xmlhttp.open("GET", "assets/index/slideshow-items.xml", true);
    xmlhttp.send();
}

function slideshow(xml) {
    var titles, links, i, txt, xmlDoc; 
    xmlDoc = xml.responseXML;
    txt = "";
    titles = xmlDoc.getElementsByTagName("title");
    links = xmlDoc.getElementsByTagName('link');
    for (i = 0; i < titles.length; i++) { 
        txt += '<a href = '+links[i].childNodes[0].nodeValue+' class = "navlinks">'+titles[i].childNodes[0].nodeValue+'</a> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
    }
    document.getElementById("navBox").innerHTML = txt;
}

//onload

function load(){
    loadMenuItems()
    showSlides(1)
	giveImgTags()
}