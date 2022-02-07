require('dotenv').config()

const discord = require('discord.js')
const client = new discord.Client()
const dict = require('./deck')
const dealer = require('./src/dealer')

const overturnRegex = /\!overturn(\ )*((\d)+(\ )*)+/
const cofRegex = /\!cof(\ )*((\d)+(\ )*)*/
const numberRegex = /(\d)+/g


client.on('ready', () => {
    console.log('logged in as ' + client.user.tag)
})

console.log(dict)

client.on('message', msg => {
    console.log('messagem received!')
    const cmd = msg.content

    if(overturnRegex.test(cmd)){
        console.log('ENTROU NO OVERTURN')
        const amount = cmd.match(numberRegex)
        const totalAmount = amount.reduce((a, b) => parseInt(a) + parseInt(b), 0)
        if(totalAmount <= 52){
            const hand = dealer.overturn(amount, totalAmount)
            console.log(hand)
        } else {
            msg.reply(`The deck doesn't have that many cards!`)
        }
        
    } else if(cofRegex.test(cmd)){
        console.log('veio um cof')
        const amount = cmd.match(numberRegex)
        const totalAmount = (amount === null) ? 1 : amount.reduce((a, b) => parseInt(a) + parseInt(b), 1)
        if(totalAmount <= 51){
            const hand = dealer.cof(amount, totalAmount)
            console.log(hand)
        } else {
            msg.reply(`The deck doesn't have that many cards!`)
        }
    }

})
client.login(process.env.BOT_TOKEN)