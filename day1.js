function oddNumbers(arr){
    let odds = [] 
    arr.forEach(e => {
        if(e % 2 !== 0){
            odds.push(e);
        }
    });
    return odds
}

console.log(oddNumbers([1,2,3,4,5,6]));
