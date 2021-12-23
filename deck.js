const deck = []
for(let i = 1; i <= 4; i++){
    let suit
    switch (i){
        case 1: 
            suit = 'Spades'
            break
        case 2:
            suit = 'Hearts'
            break
        case 3:
            suit = 'Diamonds'
            break
        default:
            suit = 'Club'
    } 
    for(let j = 1; j <= 13; j++){
        let number
        if(j < 10  && j != 1)
            number = j.toString()
        else 
            switch(j){
                case 11:
                    number = 'J'
                    break
                case 12:
                    number = 'Q'
                    break
                case 13:
                    number = 'K'
                    break
                default:
                    number = 'A'
            }   
        deck.push({
            face: number + suit.charAt(0),
            number: j,
            suit: suit
        })
    }
}

const joker = {
    face: 'J',
    number: 0,
    suit: 'Joker'
}
module.exports = { deck, joker }
