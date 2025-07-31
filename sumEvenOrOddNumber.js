// Sum all Even number

let even = 81;
let sumEven = 0;
while(even <= 131){
        if (even % 2 === 0) { 
        sumEven = sumEven + even;
    }
    even++;
}
    console.log('sumEven:', sumEven);

// sum all odd number


let odd = 206;
let sumOdd = 0;
while(odd <= 311){
        if (odd % 2 !== 0) { 
        sumOdd = sumOdd + odd;
    }
    odd++;
}
    console.log('sumOdd:', sumOdd);