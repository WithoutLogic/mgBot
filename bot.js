const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', async message => {
	if(message.author.bot) return;
	
	if (message.content === '!ping') {
		const m = await message.channel.send("Ping?");
		message.reply('${Math.round(client.ping)}');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
