const Discord = require('discord.js');
const clientCommands = require('./commands');

const client = new Discord.Client();
client.commands = new Discord.Collections();

Object.keys(clientCommands).map((key) => {
  client.commands.set(clientCommands[key].name, clientCommands[key]);
});

client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);
  if (!client.commands.has(command)) return;

  try {
    await client.command.get(command).execute(msg, Math.round(client.ping));
  } catch (e) {
    console.error(e);
    msg.reply('There was an error trying to execute that command!');
  }
});

client.login(process.env.BOT_TOKEN);
