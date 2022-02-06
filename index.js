require('dotenv').config()

const discord = require('discord.js')
const client = new discord.Client()
const dict = require('./deck')
const overturner = require('./src/overturner')

const overturnRegex = /overturn(\ )*(?<amount>(\d)+(\ )*)+/g
const numberRegex = /(\d)+/g

const hello = overturnRegex.exec('overturn 5 4 3 2 1')
console.log(hello[0])
console.log(hello[0].match(numberRegex))
console.log(hello)


client.on('ready', () => {
    console.log('logged in as ' + client.user.tag)
    console.log(overturner.overturn(5))
})

console.log(dict)

client.on('message', msg => {
    if(msg.content.startsWith('!')){
        const cmd = msg.content.replace('!', '')
        if(cmd.startsWith('overturn')){
            const amount = parseInt(cmd.replace('overturn', ''))
            console.log(amount)
            if(isNaN(amount))
                msg.reply(`formatting error.`)
            else
                msg.reply(`im supposed to overturn ${amount} cards, but i'm not ready yet!`)
        } else if(cmd.startsWith('cof')){

        }
        
    }
})
client.login(process.env.BOT_TOKEN)