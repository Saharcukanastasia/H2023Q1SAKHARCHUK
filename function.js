const a = [64, 87, 23, 72, 5, 36]
const b = [642, 817, 233, 724, 5, 36]
const c = [64, 87, 2313, 74562, 235, 36]
function evenNumberCreation(array){
    const result = []
    for (i = 0; i<= array.length; i++) {
        if(array[i] %2===0)
        result.push (array[i])
    }
    return result
}



console.table(evenNumberCreation(c))
