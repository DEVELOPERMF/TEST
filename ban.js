//AutoWoot vytvorený THEFALSOM. https://plug.dj/m-f-e

$('#woot').click();
var emojibuttonon = $(".icon-emoji-on");
if (emojibuttonon.length > 0) {
	emojibuttonon[0].click();
}
var onlyaudio = $(".item.s-vo");
if (onlyaudio.length > 0) {
	onlyaudio[0].click();
}

var avatarsoff = $(".item.s-dancing.selected");
if (avatarsoff.length > 0) {
	avatarsoff[0].click();
}

var videooff = $(".item.s-av.selected");
if (videooff.length > 0) {
	videooff[0].click();
}

API.sendChat("/cap 1");
API.chatLog('AutoWoot online! Vytvorený MRFALSE.');
API.setVolume(0);

API.on(API.CHAT, chat);
API.on(API.ADVANCE, advance);

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

	if(from === "NanoBytez") {
		if(msg === "!meh") {
			$('#meh').click();
		}
		if(msg === "!woot") {
			$('#woot').click();
		}
	}
}
