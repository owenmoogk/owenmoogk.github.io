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
    var titles, links, i, txt, xmlDoc, texts; 
    xmlDoc = xml.responseXML;
    txt = "";
    console.log(xmlDoc)
    titles = xmlDoc.getElementsByTagName("title");
    links = xmlDoc.getElementsByTagName('link');
    texts = xmlDoc.getElementsByTagName('text');
    for (i = 0; i < titles.length; i++) { 
        txt += '<div class="link primary"><a href="'+links[i].childNodes[0].nodeValue+'" target = "_blank"><div class="text">'+titles[i].childNodes[0].nodeValue+'</div></a></div>';
    }
    document.getElementById("main").innerHTML = txt;
}