const numbers = [1,2,3,4,5,6,7,8];

const allTheNumbers = numbers.map((number, property) =>{
    const numbersMaped = {num: property, numbers: number};
    return numbersMaped;
});

console.log(allTheNumbers);

console.log(numbers.filter((number)=>{
    return number < 5;
}));

const multiplaction = numbers.reduce((prevValue, CurValue) => prevValue * CurValue, 1);
console.log(multiplaction);

const findingTheMaxValue = Math.max(...numbers);
console.log(findingTheMaxValue);

const findingMax = (...array)=>{
    let curMax = array[0];
    let curMin = array[0];
    for(const num of array){
        if(num > curMax){
            curMax = num;
        }
        if(num < curMin){
            curMin = num;
        }
    }
    return [curMax, curMin];
}

const [min, max] = findingMax(...numbers)
console.log(min,max);



const newlist = new Set();
newlist.add(10);
newlist.add(-5);
newlist.add(-5);


console.log(newlist);