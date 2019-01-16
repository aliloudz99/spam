const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("535162854496796703")
setInterval(function() {
channel.send(`هلا والله بالعيال انا نوتش وانا ما احبكم ابد يا كلاب`);
}, 30)
})

client.login(process.env.BOT_TOKEN);