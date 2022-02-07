require('dotenv').config()

const discord = require('discord.js')
const client = new discord.Client()
const dict = require('./deck')
const helper = require('./helper')
const dealer = require('./src/dealer')

const overturnRegex = /\!overturn(\ )*((\d)+(\ )*)+/g
const cardRegex = /(?<card>(([2-9]|(10))|(J|Q|K|A))(S|H|C|D))/g

const regexsex = /1(?!(0(S|H|D|C)))(\d)*/

const cofRegex = /\!cof(\ )*((\d)+(\ )*)*/
const numberRegex = /(\d)+/g


client.on('ready', () => {
    console.log('logged in as ' + client.user.tag)
})

console.log(dict)

client.on('message', msg => {
    const cmd = msg.content

    if(overturnRegex.test(cmd)){
        console.log('ENTROU NO OVERTURN')
        const target = cmd.match(cardRegex)
        const parsedCmd = target === null ? cmd : cmd.replace(target, '')
        
        
        const amount = parsedCmd.match(numberRegex)
        const totalAmount = amount.reduce((a, b) => parseInt(a) + parseInt(b), 0)
        if(totalAmount <= 52){
            const hand = dealer.overturn(amount, totalAmount)
            if(target !== null){
                let a = helper.cardParse(target[0])
                console.log(helper.estimateSuccess(a, hand[0]))
            }
            msg.reply(helper.simpleReplyBuilder(hand))
            //console.log(helper.simpleReplyBuilder(hand))
        } else {
            msg.reply(`The deck doesn't have that many cards!`)
        }
        
    } else if(cofRegex.test(cmd)){
        console.log('veio um cof')
        const amount = cmd.match(numberRegex)
        const totalAmount = (amount === null) ? 1 : amount.reduce((a, b) => parseInt(a) + parseInt(b), 1)
        if(totalAmount <= 51){
            const hand = dealer.cof(amount, totalAmount)
            msg.reply(helper.cofReplyBuilder(hand))
        } else {
            msg.reply(`The deck doesn't have that many cards!`)
        }
    }

})
client.login(process.env.BOT_TOKEN)