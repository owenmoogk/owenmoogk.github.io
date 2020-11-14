function loadContacts() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			contacts(this);
		}
    };
    xmlhttp.open("GET", "/assets/contact.xml", true);
    xmlhttp.send();
}
function contacts(xml) {
    var titles, links, i, txt, xmlDoc, images; 
    xmlDoc = xml.responseXML;
    txt = "";
    titles = xmlDoc.getElementsByTagName("title");
    links = xmlDoc.getElementsByTagName('link');
    texts = xmlDoc.getElementsByTagName('text');
    for (i = 0; i < 3; i++) { 
        txt += titles[i].childNodes[0].nodeValue+': <a href="'+links[i].childNodes[0].nodeValue+'" class="link">'+texts[i].childNodes[0].nodeValue+'</a><br>';
    }
    document.getElementById("main").innerHTML = txt;
    txt = ''
    for (i = 3; i < titles.length; i++) { 
        txt += titles[i].childNodes[0].nodeValue+': <a href="'+links[i].childNodes[0].nodeValue+'" class="link" target="_blank">'+texts[i].childNodes[0].nodeValue+'</a><br>';
    }
    document.getElementById("other").innerHTML = txt;
}