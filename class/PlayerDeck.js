const deck = require('./../deck')

module.exports = class PlayerDeck {
    constructor(){
        this.deck = deck
        deck.push({
            face: 'J',
            number: 0,
            suit: 'Joker'
        })
    }
}