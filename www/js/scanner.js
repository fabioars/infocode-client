document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
}

function callAnotherPage(page){
    window.location = page;
}

function startScan() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
            if(result.cancelled == false){
                sessionStorage.setItem("qrCode", result.text);
                callAnotherPage("info.html");
            }else{
                document.getElementById("allContent").innerHTML = "<div class=\"card\">Tente novamente.</div>";
            }
 		},
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}
