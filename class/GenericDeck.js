const helper = require('../helper')

module.exports = class GenericDeck {
    constructor(){
        this.deck = []
        this.discardPile = []
    }

    overturnAmount(n){
        if(n > this.deck.length)
            return `Not enough cards on the deck!`
        const hand = []
        while(n > 0){
            const i = helper.randomInt(this.deck.length)
            hand.push(this.removeByIndex(i))
        }

    }

    removeByIndex(index){
        const card = this.deck.splice(index, 1)
        this.discardPile.push(card)
        return card
    }
    removeByValues(value){
        const index = this.deck.findIndex(p => p.face === value)
        const card = this.deck.splice(index, 1)
        this.discardPile.push(card)
        return card
    }
    
    addCard(card){
        const cardObj = helper.cardParse(card)
        if(cardObj != undefined){
            this.deck.push(cardObj)
            return `Card ${card} added to the deck!`
        }
        return `Couldn't add the card to the deck.`
        
    }

    shuffleBack(){
        this.deck.push(...this.discardPile)
        this.discardPile = []
        return `Shuffled ${this.discardPile.length} cards back into the deck`
    }
    reset(){
        this.discardPile = []
        this.deck = []
    }
}