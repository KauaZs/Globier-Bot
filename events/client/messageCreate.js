const client = require('../../index.js')
const db = require('secure-db')

 client.on('messageCreate', async (message) => {
  if(message.author.bot) return;
  const prefix = 'g?';

  if(message.content.replace('!','').startsWith(`<@${client.user.id}`)) return message.reply('oi')

  let channelsData = db.get(`channels`)
  if(channelsData?.includes(message.channel.id)) {
require('../../client/global.js').run(client, message)
  }
  if(!message.content.startsWith(prefix)) return;
  
  const args = message.content.slice(prefix.length).trim().split(' ');

  const command = args.shift().toLowerCase()
 let cmd = client.commands.get(command) || client.commands.find(als => als.aliases && als.aliases.includes(command));

 if(cmd) return cmd.run(client, message, args);
    
 })