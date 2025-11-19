// A callback is a function you give to another function to run later.
// while Array methods Array methods are built-in tools you use to work with arrays, like:

// doing something to every item (forEach)

// changing items (map)

// picking some items (filter)

// adding all items together (reduce)




// The forEach Method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function print(element) {
  console.log(element);
}
numbers.forEach(print); //, it will pass 1 to print, then 2, then 3, and so on. As a result, every element is printed out.



numbers.forEach(function (el) {
  console.log(el);
});


for (let el of numbers) {
  console.log(el);
}


numbers.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});


const movies = [{
    title: 'Amadeus'
    score: 99
},
    {title: 'stand by me'
     score
    }, {
    
  }]







// INTRODUCTION TO ARROW FUNCTION

//In JavaScript, an arrow function is just a shorter and simpler way to write a function.
// A callback is a function you pass as a value to another function.



const greet = () => {
  console.log("Hello!");
};





NOTORIOUS REDUCE METHOD executes a reducer function on each element of a array resulting in a single value 

INTRO  
SUMMING AN ARRAY
[3, 5, 7, 9, 11].reduce ((accumulator,  currentvalue ) =>  { return accumulator  + currentvalue; });


1st OUTPUT ( we used lovely for of Loop to sum up the arrays )✅
const prices = [ 9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0
for (let price of prices ) { 
total  += price 
}
console.log (total)


2nd OUTPUT ( using reduce method to sum the arrays)✅
⬇️
const prices = [ 9.99, 1.50, 19.99, 49.99, 30.50];

const total = prices.reduce((total, price) => total + price, 0);

console.log(total); // Output: 111.97


3rd OUTPUT ( using reduce method to multiply the arrays)✅
⬇️
const prices = [ 9.99, 1.50, 19.99, 49.99, 30.50];

const product = prices.reduce((total, price) => total * price, 1);

console.log(product); // Output: 45448.12...




4th OUTPUT ( using reduce method to check minimum value)✅
⬇️
const prices = [ 9.99, 1.50, 19.99, 49.99, 30.50];

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
}, Infinity); // Start with Infinity so any price will be smaller

console.log(minPrice); // Output: 1.5





5th OUTPUT   ( using reduce method to check maximum value)✅
⬇️
const prices = [ 9.99, 1.50, 19.99, 49.99, 30.50];

const maxPrice = prices.reduce((max, price) => {
  if (price > max) {
    return price;
  }
  return max;
}, -Infinity); // Start with -Infinity so any price will be larger

console.log(maxPrice); // Output: 49.99



6th OUTPUT (using reduce method to check highest rated movie) ✅

const movies = [
  {title: 'Amadeus', score: 99, year: 1984}, 
  {title: 'sharknado', score: 35, year: 2013}, 
  {title: '13 going to on 30', score: 70, year: 2004}, 
  {title: 'Stand by me', score: 85, year: 1986}, 
  {title: 'waterworld', score: 71, year: 1996}, 
  {title: 'Jungle all the way', score: 71, year: 1996}, 
  {title: 'parasite', score: 95, year: 2019}, 
  {title: 'Nothing Hill', score: 77, year: 1999}, 
  {title: 'Alien', score: 90, year: 1979} // Added year for completeness
];



const highestRated = movies.reduce((bestMovie, currMovie) => {
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
}, {score: -1}); // Initial value with a very low score

console.log(highestRated); // Output: {title: 'Amadeus', score: 99, year: 1984}




7th OUTPUT  (using reduce method to sum even numbers) ✅
⬇️
const evens = [2, 4, 6, 8];

const sum = evens.reduce((sum, num) => sum + num, 0);

console.log(sum); // Output: 20



8th OUTPUT (using reduce method to sum from initial 100 to other numbers in the array)✅
const evens = [2,4,6, 8];
const result = evens.reduce((sum, num) => sum + num, 100);

console.log(result); // Output: 120

  