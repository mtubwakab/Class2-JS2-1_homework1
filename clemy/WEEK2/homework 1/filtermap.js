const numbers = [1,2,3,4];

    let newNumbers = numbers
        .filter(number => number % 2 !== 0)
        .map(number => number * 2) 
console.log("The odd numbers are", newNumbers);

const monday = [
    {name: 'Write a summary HTML/CSS',duration: 180},
    {name: 'Some web development',duration: 120},
    {name: 'Fix homework for class10',duration: 20},
    {name: 'Talk to a lot of people',duration: 200}
  ];
  
  const tuesday = [
    {name: 'Keep writing summary',duration: 240},
    {name: 'Some more web development',duration: 180},
    {name: 'Staring out the window',duration: 10},
    {name: 'Talk to a lot of people', duration: 200},
    { name: 'Look at application assignments new students', duration: 40}
  ]; 
const tasks = monday.concat(tuesday);

const times = tasks
    .map(event => event.duration/60)
  console.log(times);
const lessThan2 = tasks
    .filter(number => number.duration/60 > 2)
    console.log(lessThan2);
const multiplyAndSum = tasks
    .map((number) => number.duration * 20.17)
    .reduce((acc, current) => [(+acc) + (+current)])
    .map((amount) => '€' + amount.toFixed(2))
    .reduce((formatted_amount) =>formatted_amount)
console.log(multiplyAndSum);



  