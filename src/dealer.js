const deck = require('./../deck')
const helper = require('./../helper')


module.exports = {

    overturn: function(nArray, totalAmount){

        const shuffled = helper.shuffle(Object.keys(deck), totalAmount)
        const results = []
        for(let i = 0; i < nArray.length; i++){
            let n = parseInt(nArray[i])
            results.push([])
            while(n > 0){
                results[i].push(deck[shuffled.pop()])
                n--
            }
        }

        return results
    },
    
    cof: function(nArray, totalAmount){
        nArray = nArray ?? ['1']
        const shuffled = helper.shuffle(Object.keys(deck), totalAmount, 1)
        const results = []

        for(let i = 0; i < nArray.length; i++){
            let n = parseInt(nArray[i])
            results.push([])
            while(n > 0){
                results[i].push(deck[shuffled.pop()])
                n--
            }
        }
        return results
    }
}