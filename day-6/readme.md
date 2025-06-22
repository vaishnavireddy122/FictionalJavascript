<h2>Event Bubbling</h2>
<p>Event bubbling is a method of event propagation in the DOM where the event starts from the target element and bubbles up to its parent, then its parent’s parent, all the way up to the root.</p>
<p>How it works:<br>
When an event (like a click) is triggered on an element:<br>
It first runs the handler on that element (target).<br>
Then it bubbles up to its parent and runs any handlers there.<br>
Continues up through the ancestors, unless stopped.<br>Example:
</p>
<pre>
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
  });

  document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
  });
</script>
</pre>
<p> Output when clicking the button:</p>
<pre>
Child clicked
Parent clicked
</pre>
<br>
<br>
<h2>Event Delegation</h2>
<p>Event delegation is a pattern where a parent element handles events on behalf of its child elements, leveraging event bubbling.<br>
Why use it:<br>Improves performance by reducing the number of event listeners.<br>
Useful for dynamically added elements.<br> Example:
</p>
<pre><ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
  document.getElementById('list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      console.log('Clicked:', event.target.textContent);
    }
  });
</script>
</pre>
<p>output: <br> If you click on Item 1, you'll get
<br> You clicked: Item 1
<br> Click on Item 2:<br> You clicked: Item 2
<br> Click on Item 3:<br> You clicked: Item 3
</p>
<h4>Why is this useful?</h4>
<p>Even if you later add a new item like</p>
<pre>let newItem = document.createElement("li");
newItem.textContent = "Item 4";
document.getElementById("list").appendChild(newItem);
</pre>
<p>Clicking on Item 4 will also trigger the same alert:<br>You clicked: Item 4
<br> Because the parent <ul> is listening to all clicks, even from new children!</p>
<br>
<br>
<h2>Basic TypeScript (TS) data types</h2>
<p>1. number:<br> Represents all numbers (integers, floats, etc.)<br>
<pre>let age: number = 25;
let price: number = 99.99;
</pre>
</p>
<p>2. string:<br>
For text values (words, characters)</p>
<pre>let name: string = "Alice";
let greeting: string = `Hello, ${name}!`;
</pre>
<p>3. boolean:<br>
True or false values</p>
<pre>
let isLoggedIn: boolean = true;
let hasPaid: boolean = false;
</pre>
<p>4. any:<br>
Accepts any value. Use carefully — it removes TypeScript's safety!</p>
<pre>
let something: any = "Hello";
something = 123; // still valid
</pre>
<p>5. unknown:<br>
Also accepts any value, but safer than any — forces type checks before using.</p>
<pre>
let data: unknown = "Test";
// Need to check type before using
if (typeof data === "string") {
  console.log(data.toUpperCase());
}
</pre>
<p> 6. null and undefined:<br>
For variables with no value yet.</p>
<pre>
let nothing: null = null;
let notSet: undefined = undefined;
</pre>
<p> 7. array:<br>
A list of values of the same type.</p>
<pre>
let numbers: number[] = [1, 2, 3];
let fruits: string[] = ["apple", "banana"];
</pre>
<p>Alternate syntax:<br>let scores: Array<number> = [10, 20, 30];
</p>
<p>8. tuple:<br>
An array with a fixed number of elements, each with known types.</p>
<pre>
let person: [string, number] = ["Alice", 30];
</pre>
<p>9. enum:<br>
Used for a set of named constants.</p>
<pre>
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
</pre>
<p>10. object:
Any non-primitive value with key-value pairs.</p>
<pre>
let user: { name: string; age: number } = {
  name: "John",
  age: 25
};
</pre>
<p>11. void:<br>
Used when a function does not return anything.</p>
<pre>
function sayHello(): void {
  console.log("Hello");
}
</pre>
