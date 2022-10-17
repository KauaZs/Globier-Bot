const { EmbedBuilder, Colors } = require('discord.js')
const db = require('secure-db')

module.exports = {
  run: async(client, message) => {
  let channelsData = db.get(`channels`)
  let embed = new EmbedBuilder()
  .setAuthor({name: message.author.tag,iconURL: message.author.displayAvatarURL()})
  .setDescription(message.content.replace(/(www|http:|https:)+[^\s]+[\w]/g,'[ LINK ]').slice(0,400) || '{ 🖼️ } Anexo:')
  .setThumbnail(message.guild.iconURL())
  .setFooter({text: `${message.guild.name} - ${message.guild.id}`})
  .setColor(Colors.Blue)
   if(message.attachments.first()?.contentType?.includes(image)) embed.setImage(message.attachments.first().url);
    
 channelsData.filter(x => x !== message.channel.id).forEach(channel => {
    client.channels.cache.get(channel).send({embeds: [embed]})
 })
  }
}
