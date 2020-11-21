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
    var titles, links, i, txt, xmlDoc, images; 
    xmlDoc = xml.responseXML;
    txt = "";
    titles = xmlDoc.getElementsByTagName("title");
    dates = xmlDoc.getElementsByTagName('date');
    texts = xmlDoc.getElementsByTagName('text');
    for (i = 0; i < 3; i++) { 
        txt += '<div class="link primary"><a href="'+links[i].childNodes[0].nodeValue+'"><div class="text">'+titles[i].childNodes[0].nodeValue+'</div></a></div>';
    }
    document.getElementById("main").innerHTML = txt;
    txt = '';
}