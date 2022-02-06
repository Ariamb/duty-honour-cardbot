//const deck = []
const dict = {}
let index = 1
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
            suit = 'Clubs'
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
        dict[index] = {
            face: number + suit.charAt(0),
            number: j,
            suit: suit
        }
        /*
        deck.push({
            "index": index,
            face: number + suit.charAt(0),
            number: j,
            suit: suit
        })*/
        index++
    }
}

/*
const joker = {
    "index": 0,
    face: 'J',
    number: 0,
    suit: 'Joker'
}
*/
dict[0] = {
    face: 'J',
    number: 0,
    suit: 'Joker'

}
/*
const pack = {
    deck: deck,
    joker: joker
}*/
module.exports = dict
