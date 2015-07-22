//Tento script je vytvorený MRFALSOM pre TEST účely.

API.sendChat("/me @MRFALSE> Testovací bot zapnutý.");

function advance(obj) {
	$('#woot').click();
}

function chat(data) {
	var msg = data.message;
	var from = data.un;

	if(from === "-WAIN") {
		if(msg === "!meh") {
			$('#meh').click();
		}
		if(msg === "!woot") {
			$('#woot').click();
		}
	}

	if(from === "MRFALSE") {
		if(msg === "!meh") {
			$('#meh').click();
		}
		if(msg === "!woot") {
			$('#woot').click();
		}
	}
}
