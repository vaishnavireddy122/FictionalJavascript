<h2>DOM</h2>
<p>The DOM (Document Object Model) in JavaScript is a programming interface that allows you to interact with and manipulate HTML and XML documents using JavaScript.</p>
<h3>getElementById():</h3>
<p>The getElementById() method is a DOM (Document Object Model) method in JavaScript used to select an HTML element by its id attribute.</p>
<p>✅ Syntax:</p>
<p>document.getElementById("id")</p>
<p>Returns the element with the given id, or null if not found.</p>
<h4>✅ What You Can Do with getElementById()</h4>
<p>1. Change Text</p>
<p>document.getElementById("title").innerText = "New Heading";</p>
<p>2. Change Style</p>
<p>document.getElementById("title").style.color = "blue";</p>
<p>3. Change Attributes</p>
<p>document.getElementById("myImage").src = "new-image.jpg";</p>
<h3>getElementsByClass:</h3>
<p>✅ document.getElementsByClassName() <br>
This method returns a live HTMLCollection of all elements with a specified class name.
✅ Syntax: <br> document.getElementsByClassName("className") <br>
Returns a collection (like an array) of elements.<br>
You must access elements by index (e.g., [0], [1], etc.).
</p>
<h3>getElementsByTagName():</h3>
<p>DOM method in JavaScript used to select elements by their HTML tag name (like div, p, h1, etc.).
<br>
 ✅ getElementsByTagName() Syntax<br>
  document.getElementsByTagName("tagName"); <br>
  Returns a live HTMLCollection of all matching elements.<br>
You can access them using index notation: [0], [1], etc.
</p>
<h3>document.querySelector():</h3>
<p>Returns the first element that matches a CSS selector.<br>
Syntax:<br>
document.querySelector("selector")<br>
Example:<br>
<pre><p class="info">First</p>
<p class="info">Second</p>

<script>
  const firstPara = document.querySelector(".info");
  firstPara.style.color = "red"; // Only the first <p> gets red color
</script>
</pre> 
</p>
<h3>querySelectorAll():</h3>
<p>Returns all matching elements as a static NodeList.<br>
Syntax:</p>
<p>document.querySelectorAll("selector")<br>
Example:
</p>
<pre>
  <p class="item">Item 1</p>
<p class="item">Item 2</p>
<p class="item">Item 3</p>
<button onclick="highlight()">Highlight</button>

<script>
  function highlight() {
    const items = document.querySelectorAll(".item");

    items.forEach((item, index) => {
      item.style.color = "blue";
      item.innerText = "Updated Item " + (index + 1);
    });
  }
</script>
</pre>
<h3>✅ Event Listeners :</h3>
<p>Event listeners in JavaScript let you run code in response to user actions like clicks, keypresses, mouse moves, etc.<br> Syntax: <br>element.addEventListener("event", callbackFunction);<br>
"event" is a string like "click", "mouseover", "keydown", etc.<br>
callbackFunction is the function that runs when the event happens.
</p>
Example<br>
<pre>document.getElementById("myBtn").addEventListener("click", function () {
  document.getElementById("output").innerText = "Button clicked!";
});
</pre>
<p>Common Event Types
<pre>
Common Event Types
Event	         Triggered When...
click         	User clicks an element
mouseover	      Mouse hovers over an element
mouseout	      Mouse leaves an element
keydown	        User presses a key
submit	        Form is submitted
change	        Form input value changes
load	          Page finishes loading
</pre>
<p>🔹 Example: Mouseover Event<br>const box = document.getElementById("box");
box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "lightblue";
});
<br> 🔹 Example: Keydown Event: <br> document.addEventListener("keydown", function (event) {
  console.log("You pressed: " + event.key);
});
<br>
Click Event Listener:<br>
<pre>
  <button id="myBtn">Click Me</button>
<p id="output"></p>

<script>
  document.getElementById("myBtn").addEventListener("click", function () {
    document.getElementById("output").innerText = "Button clicked!";
  });
</script>
</pre>
Mouseover Event Listener:<br>
<pre>
<div id="box" style="width:100px; height:100px; background-color:gray;"></div>

<script>
  const box = document.getElementById("box");
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "lightblue";
  });
</script>
</pre>
Keydown Event Listener:<br>
<pre>
document.addEventListener("keydown", function (event) {
  console.log("You pressed: " + event.key);
});
</pre>
Removing Event Listener (no visible output)<br>
<pre>
function greet() {
  alert("Hello!");
}

const btn = document.getElementById("btn");
btn.addEventListener("click", greet);
btn.removeEventListener("click", greet);
</pre>
</p>
