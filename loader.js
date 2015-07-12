//Tento script je vytvorený MRFALSOM pre TEST účely.

API.sendChat("@MRFALSE> Test script bol spustený!");
$('#woot').click();
function advance(obj) {
	$('#woot').click();
}
skipCommand: {
                command: 'skip',
                type: 'exact',
                functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void (0);
                    else {
                        API.sendChat("Test Skip!");
                        API.moderateForceSkip();
                        
                    }
                }
            }
