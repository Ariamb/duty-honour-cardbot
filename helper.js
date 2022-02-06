module.exports = {
    randomInt: function(min, max) { //min to max, both included
        return Math.floor(Math.random() * (max + 1 - min) + min)
    },
    shuffle: function(array, limit, min){
        let m = array.length - 1
          
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            //Math.random * (array.length - min + 1) + min
            const i = Math.floor(Math.random() * (m-- - min) + min)
          
            // And swap it with the current element.
            const t = array[m]
            array[m] = array[i]
            array[i] = t
            if(limit === 0)
                break
            limit--
        }
        return array
    },

    cardParse: function(abv){
        const cardRegex = /((([2-9]|(10))|(J|Q|K|A))(S|H|C|D)|J)/
        if(!cardRegex.test(abv)){
            return undefined
        }
        const split = [...abv]
        if(split == undefined){
            return undefined
        }
        if(split.length === 1 && split[0] === 'J'){
                return {
                    face: 'J',
                    number: 0,
                    suit: 'Joker'
                }
        }
        let suit
        switch (split[1]) {
            case 'S':
                suit = 'Spades'
                break
            case 'H':
                suit = 'Hearts'
                break
            case 'D':
                suit = 'Diamonds'
                break
            case 'C':
                suit = 'Clubs'
                break
            default:
                return undefined
        }
        let number = parseInt(split[0])
        if(isNaN(number)){
            switch (split[0]){
                case 'A':
                    number = 1
                    break
                case 'J':
                    number = 11
                    break
                case 'Q':
                    number = 12
                    break
                case 'K':
                    number = 13
                    break
                default:
                    return undefined
            }
        }

        return {
            face: 'J',
            number: number,
            suit: suit
        }
    }
}