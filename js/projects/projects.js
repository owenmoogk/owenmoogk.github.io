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
        txt += '<div class="container"><div class="content"><a href='+links[i].childNodes[0].nodeValue+'><img class="content-image-png" src='+images[i].childNodes[0].nodeValue+'><div class="content-details fadeIn-bottom"><h3 class="content-title">'+titles[i].childNodes[0].nodeValue+'</h3></div></a></div></div>';
    }
    document.getElementById("projects").innerHTML = txt;
}
