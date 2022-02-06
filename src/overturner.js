const deck = require('./../deck')
const helper = require('./../helper')


module.exports = {

    overturn: function(n){
        const shuffled = helper.shuffle(Object.keys(deck), n, 0)
        const results = []
        while(n > 0){
            results.push(deck[shuffled.pop()])
            n--
        }
        return results
    },
    
    cof: function(){
        const shuffled = helper.shuffle(Object.keys(deck), 1, 1)
        const results = []
        results.push(deck[shuffled.pop()])
        return results
    }
}