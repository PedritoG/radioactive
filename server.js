const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'amigo') {
    msg.reply('Eyeyeyeye');
  }
});

client.login('Nzc1MDcxMTY0Nzg3MDY0ODMz.X6g_RQ.PGYCGhO1qXdV28lMR_E5KBaewhM');