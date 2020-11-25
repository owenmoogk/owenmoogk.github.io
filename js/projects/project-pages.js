function loadProjectPage(xmlDoc) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			projectPage(this);
		}
    };
    xmlhttp.open("GET", xmlDoc, true);
    xmlhttp.send();
}
function projectPage(xml) {
    var titles, links, i, txt, xmlDoc, images; 
    xmlDoc = xml.responseXML;
    txt = "";
    titles = xmlDoc.getElementsByTagName("title");
    links = xmlDoc.getElementsByTagName('link');
    descriptions = xmlDoc.getElementsByTagName('description');
    for (i = 0; i < titles.length; i++) { 
        txt += '<div class="item"><a href='+links[i].childNodes[0].nodeValue+'>'+titles[i].childNodes[0].nodeValue+'</a> - '+descriptions[i].childNodes[0].nodeValue+'</div>';
        if (i+1 != titles.length){
            txt += '<hr class="list-seperate">'
        }
    }
    document.getElementById("list-items").innerHTML = txt;
    console.log(txt)
}