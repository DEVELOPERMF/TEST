//Tento script je vytvorený MRFALSOM pre TEST účely.

API.sendChat("/me @MRFALSE> Testovací bot zapnutý.");

function chat(data) {
	var msg = data.message;
	var from = data.un;

	if(from === "MRFALSE") {
		if(msg === "!afk") {
			API.sendChat("Aktuálne som preč od klávesnice.");
		}
	}
}
