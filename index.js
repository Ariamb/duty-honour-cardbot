require('dotenv').config()

const discord = require('discord.js')
const client = new discord.Client()

const deck = require('./deck')

client.on('ready', () => {
    console.log('logged in as ' + client.user.tag)
    console.log(deck)
})


client.on('message', msg => {
    if(msg.content.startsWith('!')){
        const cmd = msg.content.replace('!', '')
        console.log('here we go')
        if(cmd.startsWith('overturn')){
        } else if(cmd.startsWith('create deck')){
            const deckType = cmd.replace('create deck', '').replace(/(\ )*/, '').toLowerCase()
            if(deckType === 'gm'){
                msg.reply('all hail, DM of losers!')
                //new GMDeck();
            } else if(deckType === 'player'){
                msg.reply('the players are (the players are dead!)')
                //new playerDeck()
            }

        } else if(cmd.startsWith('test')){

        }
        
    }
})

client.login(process.env.BOT_TOKEN)