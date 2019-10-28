const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', async message => {
	if(message.author.bot) return;
	
	if (message.content === '!ping') {
		const m = await message.channel.send("testing...");
		message.reply(`Pong! Timestamp latency is ${m.createdTimestamp - message.createdTimestamp}ms. Discord API Latency is ${Math.round(client.ping)}ms.`);
	}
});

client.login(process.env.BOT_TOKEN);
