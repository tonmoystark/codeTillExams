//pure basics

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

// 1-100 sum

function sum(){
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum());

// max number

function maxNumber(arr){
    let maxnum = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(maxnum < arr[i]){
            maxnum = arr[i]
        }
    }
    return maxnum
}

console.log(maxNumber([1,2,3,4,5,6,3,12,110,100]));

// arrays mastery
const users = [
  { id: 1, name: "Tonmoy", age: 22 },
  { id: 2, name: "Alex", age: 17 },
  { id: 3, name: "John", age: 25 }
];

let names = users.map((el) => {
    return el.name
})

console.log(names);

let underAge = users.filter((el) => {
    return el.age > 18
})

console.log(underAge);

let totalAge = users.reduce((acc, ex)=> {
    return acc + ex.age
},0)

console.log(totalAge);

function adultUserCount(){
    let adults = users.filter((el) => {
        return el.age > 18
    })
    return adults.length
}

console.log(adultUserCount());

let adultsArr = users.map((user)=>{
    return {
        name: user.name,
        isAdult: user.age > 18
    }
})
console.log(adultsArr);

let findPerson = adultsArr.find((user) => {
    return user.name === 'John'
})

console.log(findPerson);


