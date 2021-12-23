const { deck, joker } = require('./../deck')
const GenericDeck = require('./genericDeck')

module.exports = class PlayerDeck extends GenericDeck{
    constructor(){
        this.deck = deck
        this.deck.push(joker)
        this.discardPile = []
    }

    reset(){
        this.deck = deck
        this.deck.push(joker)
        this.discardPile = []
    }
}