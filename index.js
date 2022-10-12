const discord = require('discord.js')
const intents = new discord.IntentsBitField
const config = require('./config.json')
const config_password = require('./config-private.json')
const client = new discord.Client({
    intents: [

    ]
})

function _add(a, b) {
    return a + b
}
client.login(config_password.BOT_TOKEN)