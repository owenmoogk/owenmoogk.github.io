// When the user clicks the button, open the modal 
function openModal(){
	$("#myModal").slideDown("slow");
	$(".title").css("filter", 'blur(7px)');
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
	$('#myModal').slideUp("slideUp");
	$(".title").css("filter", 'blur(0px)');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
      	closeModal()
    }
}