
<h3>TERNERY OPERATOR:</h3>
<p>The ternary operator in JavaScript is a concise way to perform conditional logic. <br>
It’s also known as the *conditional operator*.<br>
Syntax: condition ? expressionIfTrue : expressionIfFalse;<br>
Common Use Cases:</p>
<h2> 1. Simple Value Assignment</h2>
<pre>
let isMember = true;
let fee = isMember ? "$0.00" : "$5.00";
console.log(fee); // "$0.00"
</pre>
<h2> 2. Inline in JSX (React Example)</h2>
<pre>
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
</pre>
 <h2>3.Calling Functions</h2>
<pre>
let isAdmin = true;
isAdmin ? grantAccess() : denyAccess();
</pre>
<br>
<br>
<h3>Nested Ternary Operator in JavaScript:</h3>
<p>Nested ternary operators allow you to evaluate multiple conditions inline, but use with caution — it can get hard to read!
<br>Syntax :</p>
<pre>
condition1 ? value1
          : condition2 ? value2
          : condition3 ? value3
          : defaultValue;
</pre>
<br>
<br>

<h3>CONDITIONAL STATEMENTS:</h3>
<p>Conditional statements in JavaScript are used to perform different actions based on different conditions.<br>
 1. if Statement<br>
 2. if...else Statement<br>
 3. if...else if...else Statement<br>
 4. Ternary Operator (? :)<br>
 5. switch Statement</p>

<h4> 1. if Statement:</h4>
<p>Executes a block of code if a specified condition is true.<br>
example:</p>
<pre>
let age = 18;
if (age >= 18) {
console.log("You are an adult.");
}
</pre>
<h4> 2. if...else Statement</h4>
<p>Executes one block of code if the condition is true, another if it is false.</p>
<pre>
   let age = 16;
   if (age >= 18) {
    console.log("You are an adult.");
   } else {
     console.log("You are a minor.");
   }
</pre>
<h4>3. if...else Statement: </h4>
<p>Checks multiple conditions in sequence.</p>
<pre>
   let score = 75;
   if (score >= 90) {
     console.log("Grade: A");
   } else if (score >= 80) { 
     console.log("Grade: B");
   } else if (score >= 70) {
     console.log("Grade: C");
   } else {
     console.log("Grade: F");
   }
</pre>
<h4>4.Ternary Operator (? :)</h4>
<p>A shorthand for if...else.</p>
<pre>
  let age = 20;
  let status = (age >= 18) ? "adult" : "minor";
  console.log(status);
</pre>
<h4>5.switch Statement</h4>
<p>Selects one of many code blocks to be executed<br>example:.</p>

<pre>
  let day = "Tuesday";
  switch (day) {
    case "Monday":
      console.log("Start of the week.");
      break;
    case "Tuesday":
      console.log("Second day of the week.");
      break;
    case "Friday":
      console.log("Weekend is near!");
      break;
    default:
      console.log("Just another day.");
}
  </pre>
<br>
<br>
<h3>LOOPS (while , do-while , for , forEach , for...of)</h3>
<p>Loops in JavaScript are used to execute a block of code repeatedly, as long as a specified condition is true or for iterating over data structures like arrays.<br>
  1. while Loop<br>
  2. do...while Loop<br>
  3. for Loop<br>
  4. forEach() Method (Array method)<br>
  5. for...of Loop<br>
  6. for...in Loop (⚠️ Mostly for objects)</p>

 <h4>🔁 1. while Loop</h4>
  <p>Executes a block of code as long as the condition is true.</p>
 <pre>
    let i = 0;
    while (i < 5) {
       console.log(i);
       i++;
    }
 </pre>
<h3>🔁 2. do...while Loop</h3>
<p>Executes the block at least once, then repeats as long as the condition is true.</p>
<pre>
let i = 0;
      do {
        console.log(i);
        i++;
      } while (i < 5);

</pre>
<h4>🔁 3. for Loop</h4>
<p>Used when you know how many times you want to loop.</p>
<pre>
for (let i = 0; i < 5; i++) {
     console.log(i);
   }
</pre>
<h4>🔁 4. forEach() Method (Array method)</h4>
<p>Used to execute a function on each item in an array. You cannot break out of it with break.</p>
<pre>
let fruits = ["apple", "banana", "cherry"]; 
      fruits.forEach(function(fruit, index) {
      console.log(index + ": " + fruit);
      });
</pre>
<p>Or with arrow function:</p>
<pre>
  fruits.forEach((fruit, index) => console.log(index + ": " + fruit));
</pre>
<h4>
  🔁 5. for...of Loop
</h4>
  <p> Used to loop through the values of iterable objects like arrays, strings, etc.</p>
  <pre>
   let fruits = ["apple", "banana", "cherry"];
      for (let fruit of fruits) {
      console.log(fruit);
      }
  </pre>
  <h3>
   6.for...in Loop (⚠️ Mostly for objects)
  </h3>
  <p>Used to loop through object properties.</p>
  <pre>
  let person = { name: "Alice", age: 25, city: "Paris" };
       for (let key in person) {
        console.log(key + ": " + person[key]);
        }
  </pre>
