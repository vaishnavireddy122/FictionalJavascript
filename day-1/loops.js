//1. while Loop
let i = 0;
    while (i < 5) {
       console.log(i);
       i++;
    }

//2. do...while Loop
let x = 0;
      do {
        console.log(x);
        x++;
      } while (x < 5);

//3. for Loop
for (let i = 0; i < 5; i++) {
     console.log(i);
   }

//4. forEach() Method (Array method)
let fruits = ["apple", "banana", "cherry"]; 
      fruits.forEach(function(fruit, index) {
      console.log(index + ": " + fruit);
      });
//arrow function:
fruits.forEach((fruit, index) => console.log(index + ": " + fruit));

// for...of Loop 
let fruits2 = ["apple", "banana", "cherry"];
      for (let fruit of fruits2) {
      console.log(fruit);
      }

//for...in Loop
let person = { name: "Alice", age: 25, city: "Paris" };
       for (let key in person) {
        console.log(key + ": " + person[key]);
        }
