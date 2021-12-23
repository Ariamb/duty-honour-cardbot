const { deck } = require('./../deck')
const GenericDeck = require('./genericDeck')

module.exports = class PlayerDeck extends GenericDeck {
    constructor(){
        this.deck = deck
        this.discardPile = []
    }

    reset(){
        this.deck = deck
        this.discardPile = []
    }
}