const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let colors2 = []
let colors3 = []

for( i = colors.length - 1 ; i >= 0 ; i--){
    colors2.push(colors[i])
    colors3.unshift(colors[i])
}
console.log(colors2)
console.log(colors3)
