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
    var txt = ''
    xmlDoc = xml.responseXML;
    titles = xmlDoc.getElementsByTagName("title");
    links = xmlDoc.getElementsByTagName('link');
    for (i = 0; i < titles.length; i++) { 
        txt += '<a href = '+links[i].childNodes[0].nodeValue+' class = "navlinks">'+titles[i].childNodes[0].nodeValue+'</a>';
    }
    // text with modal contains the text with the modal html. this is so we can also import text into the modal
    textWithModal = txt+'<div id="nav-button"></div>'
    textWithModal += '<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><p class="modal-text">Some text in the Modal..</p></div></div>'
    document.getElementById('nav').innerHTML = textWithModal

    var modal = document.getElementById("myModal");
    var modalText = document.getElementsByClassName("modal-text")[0];
    var button = document.getElementById("nav-button");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName('body')[0];
    modalText.innerHTML = txt
    console.log(modalText)
    button.onclick = function() {
        modal.style.display = "block";
        body.classList.add("overlay");
    }
    span.onclick = function() {
        modal.style.display = "none";
        body.classList.remove("overlay");

    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.classList.remove("overlay");
        }
    }
}