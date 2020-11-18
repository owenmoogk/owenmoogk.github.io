function loadProjects() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			projects(this);
		}
    };
    xmlhttp.open("GET", "/assets/projects.xml", true);
    xmlhttp.send();
}
function projects(xml) {
    var titles, links, i, txt, xmlDoc, images; 
    xmlDoc = xml.responseXML;
    txt = "";
    titles = xmlDoc.getElementsByTagName("title");
    links = xmlDoc.getElementsByTagName('link');
    images = xmlDoc.getElementsByTagName('image');
    for (i = 0; i < titles.length; i++) { 
        txt += '<a href='+links[i].childNodes[0].nodeValue+'><div class="slide"><img class="ss-img" src='+images[i].childNodes[0].nodeValue+'><div class="ss-overlay"><div class="ss-text">'+titles[i].childNodes[0].nodeValue+'</div></div></a>';
    }
    txt += '<a class="ss-prev" onclick="plusSlides(-1)">&#10094;</a><a class="ss-next" onclick="plusSlides(1)">&#10095;</a>'
    document.getElementById("slideshow-container").innerHTML = txt;
    console.log(txt)
}