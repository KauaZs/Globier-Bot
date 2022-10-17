const {Client, Collection} = require('discord.js');
const { Database } = require('secure-db')
const { sync } = require('glob')

const client = new Client({intents: 3276799})
module.exports = client;
client.commands = new Collection()

const db = new Database('main')

sync('./commands/**/*.js').forEach(cmds => {
  const cmd = require(cmds)
  console.log(`[ Commands ] => ${cmd.name} carregado`)
  client.commands.set(cmd.name, cmd)
})

sync('./events/**/*.js').forEach(file => {
 // console.log(`[ Events ] => ${file} carregado`)
  const events = require(file)
})

client.login(process.env.TOKEN)