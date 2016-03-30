/*referente a funcão de efeito menu sai do canto */

function slideIn(){
    var nav = document.getElementById("control-nav");
    nav.checked = true;
}
function slideOut(){
    var nav = document.getElementById("control-nav");
    nav.checked = false;
}
var myElement = document.getElementById('gestureListener');
var mc = new Hammer(myElement);

mc.on("swiperight swipeleft", function(ev) {
    if(ev.type.toString().localeCompare("swiperight") == 0){
        slideIn();
    }
    if(ev.type.toString().localeCompare("swipeleft") == 0){
        slideOut();
    }
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
