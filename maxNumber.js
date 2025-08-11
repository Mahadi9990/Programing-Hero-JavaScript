const array = [78,94,79,56,98,90]

function getAll(array){
    let max = array[0]
    for (const item of array){
        if( item > max){
            max = item
        }
    }
    return max
}

const maxAll = getAll(array)
console.log(maxAll)