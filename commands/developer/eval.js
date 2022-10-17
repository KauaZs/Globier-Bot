const { inspect } = require('util')

module.exports = {
  name: 'eval',
  aliases: ['ev','e'],
  run: async(client, message, args) => {
    if(!args[0]) return message.reply('?')
    let code = args.join(' ')
    let response;
    try {
      response = await eval(code)
      if(typeof response !== 'string') response = inspect(response)
     message.reply(`\`\`\`js\n${response.slice(0,1880)}\`\`\``)
    } catch(err) {
      message.reply(`Erro:\n${err}`)
    }
  }
}