module.exports = {
  name: 'ping',
  description: 'Ping!',
  // eslint-disable-next-line no-unused-vars
  execute(msg, clientPing) {
    const m = msg.channel.send('testing...');
    msg.reply(`Pong! Timestamp latency is ${m.createdTimestamp - msg.createdTimestamp}ms. Discord API Latency is ${clientPing}ms.`);
  },
};
