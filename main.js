const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('Typisch Bot is online!')
});

client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot ) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    message.channel.send('pong!');
  } else if (command == 'youtube'){
      message.channel.send('https://www.youtube.com/channel/UCnPUR3XAl_y1puHZ4msWo_Q');
    }
  
});

client.login('ODY4ODQ3MzMyNTIxODIwMTgw.YP1nIg.3Dd8W7U0XwPfyPBObMdV4K4AZNw');
