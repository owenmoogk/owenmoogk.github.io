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
    console.log(xmlDoc)
    titles = xmlDoc.getElementsByTagName("title");
    dates = xmlDoc.getElementsByTagName('date');
    texts = xmlDoc.getElementsByTagName('text');
    for (i = 0; i < titles.length; i++) { 
        txt += '<div class="item"><div class="blog-title">'+titles[i].childNodes[0].nodeValue+'</div><div class="date">'+dates[i].childNodes[0].nodeValue+'</div><div class="content">'+texts[i].childNodes[0].nodeValue+'</div></div>';
        if (i+1 != titles.length){
            txt += '<hr class="list-seperate">'
        }
    }
    document.getElementById("blogs").innerHTML = txt;
}