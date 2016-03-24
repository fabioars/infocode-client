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

