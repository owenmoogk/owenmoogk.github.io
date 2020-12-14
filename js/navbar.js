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
    var titles, links, i, xmlDoc; 
    
    // text that is appended to elements
    var txt = ''

    // xml variables
    xmlDoc = xml.responseXML;
    titles = xmlDoc.getElementsByTagName("title");
    links = xmlDoc.getElementsByTagName('link');
    
    // loading text variables
    for (i = 0; i < titles.length; i++) { 
        txt += '<a href = '+links[i].childNodes[0].nodeValue+' class = "navlinks">'+titles[i].childNodes[0].nodeValue+'</a>';
    }
    txt = txt+'<div id="nav-button" onclick="modalOpen()"><img class="nav-img" src="/img/open-nav-button.png"></div>'
    
    // modal txt
    txt += '<div id="myModal" class="modal"><div class="modal-content">'
    for (i = 0; i < titles.length; i++) { 
        txt += '<a href = '+links[i].childNodes[0].nodeValue+' class = "modalLinks">'+titles[i].childNodes[0].nodeValue+'</a>';
    }
    txt += '<span class="close" onclick="modalClose()">&times;</span></div></div>'

    // side nav
    document.getElementById('nav').innerHTML = txt
}
function modalClose(){
    var modal = document.getElementById("myModal");
    var body = document.getElementsByClassName('body');
    var element;
    if (body.length == 1){
        element = body[0]
    }
    else{
        body = document.getElementsByClassName('main'); // my stupid naming ¯\_(ツ)_/¯
        if (body.length == 1){
            element = body[0]
        }
        else{
            console.log('houston we have an error') // should never happen
        }
    }
	modal.style.display = 'none'
    element.style.filter = "blur(0px)"
}
function modalOpen(){
    var modal = document.getElementById("myModal");
    
    // getting the body, putting it in the element variable
    var body = document.getElementsByClassName('body');
    var element;
    if (body.length == 1){
        element = body[0]
    }
    else{
        body = document.getElementsByClassName('main'); // my stupid naming ¯\_(ツ)_/¯
        if (body.length == 1){
            element = body[0]
        }
        else{
            console.log('houston we have an error') // should never happen
        }
    }
    element.style.filter = "blur(15px)"
    $(modal).slideDown("slow");
}
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
      	modalClose()
    }
}