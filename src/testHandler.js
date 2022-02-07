module.exports = {

    estimateSuccess: function(cof, hand){            
        const result = {
            ps = undefined,
            j: false,
            csArray: [],
            sArray: [],
            fArray: []

        }
        console.log('this is cof:')
        console.log(cof)
        console.log('this is hand')
        console.log(hand)
        for(let i = 0; i < hand.length; i++){
            if(hand[i].face === cof.face){
                result.ps = hand[i]
                continue
            }
            if(hand[i].suit === cof.suit){
                result.sArray.push(hand[i])
                continue
            }
            if(hand[i].number === cof.number){
                result.csArray.push(hand[i])
                continue
            }
            if(hand[i].face === 'J')
                result.j = true
        }
        return result
    },
    compareSuccess: function(){

    },
    stringfySuccess: function(result){ 
        let responseString = ``
        if(result.j)
            responseString += `**A JOKER!**\n`
        if(result.ps !== undefined){
            responseString += `**1 Perfect Success!** (${result.ps.face}) \n`
        }
        if(result.csArray !== []){
            responseString += `*${result.csArray.length} Critical Success${result.csArray.length === 1 ? 'es' : ''}!* (${result.csArray})\n`
        }
        if(result.sArray !== []){
            responseString += `${result.sArray.length} Normal Success${result.sArray.length === 1 ? 'es' : ''}! (${result.sArray})\n`
        }
        if(result.fArray !== []){
            responseString += `${result.fArray.length} Failure${result.fArray.length === 1 ? 's' : ''}! (${result.fArray})`
        }
        return responseString
    }

}