const db = require('secure-db')

module.exports = {
  name: 'setup',
  aliases: ['setchannel'],
  run: async(client, message, args) => {
    const channelData = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    if(!channelData) return message.reply(`:x: Canal não encontrado!`)
    let channels = message.guild.channels.cache.map(x => x.id)
    if(channelData.id.includes(channels)) return message.reply(`:x: Este canal já está definido!`)
    db.push(`channels`, channelData.id)
    message.reply(`✅ - Canal setado para ${channelData}`)
  }
}