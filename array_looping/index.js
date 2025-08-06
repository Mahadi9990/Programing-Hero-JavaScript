// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// let colors2 = []
// let colors3 = []

// for( i = colors.length - 1 ; i >= 0 ; i--){
//     colors2.push(colors[i])
//     colors3.unshift(colors[i])
// }
// console.log(colors2)
// console.log(colors3)


const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber =[]

for( i = 0 ; i <= numbers.length; i++){
    if( numbers[i] % 2 === 0){
        evenNumber.push(numbers[i])
    }
}
 
console.log(evenNumber)
