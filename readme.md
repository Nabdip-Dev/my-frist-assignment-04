

Answers to Questions:
----------------------

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1.Answers:

getElementById("id") → একটাই element দেয় যেটার ID আছে।

getElementsByClassName("class") → সব element দেয় যাদের একই class আছে (HTMLCollection হিসেবে)।

querySelector("selector") → CSS selector দিয়ে প্রথম matching element দেয়।

querySelectorAll("selector") → CSS selector দিয়ে সব matching element দেয় (NodeList হিসেবে)।
-----------



2. How do you create and insert a new element into the DOM?

2.Answers:

// নতুন div বানানো
let newDiv = document.createElement("div"); 

// কিছু লেখা যোগ করা
newDiv.textContent = "Hello World";

// page-এ add করা
document.body.appendChild(newDiv); // body-এর শেষের দিকে
-----------



3. What is Event Bubbling? And how does it work?

3.Answers:

Event Bubbling হলো যখন event একটা ছোট element থেকে শুরু করে ধাপে ধাপে বড় element এর দিকে চলে যায়।

উদাহরণ:

<div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("parent").addEventListener("click", () => console.log("Parent clicked"));
document.getElementById("child").addEventListener("click", () => console.log("Child clicked"));

button click করলে console-এ দেখা যাবে:

Child clicked
Parent clicked
-----------



4. What is Event Delegation in JavaScript? Why is it useful?

4.Answers:

Event Delegation মানে parent element-এ listener বসানো এবং child element-এর event handle করা।

কারণ:

অনেক child element-এর জন্য আলাদা listener লাগবে না।

নতুন dynamically added element-ও কাজ করবে।

document.getElementById("parent").addEventListener("click", function(e) {
  if(e.target && e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.textContent);
  }
});
-----------



5. What is the difference between preventDefault() and stopPropagation() methods?

5.Answers:

preventDefault() → default action বন্ধ করে। যেমন: link click করলে page reload বন্ধ।

stopPropagation() → event bubbling বা capturing বন্ধ করে। Parent element-এ event পৌঁছাবে না।

link.addEventListener("click", function(e) {
  e.preventDefault(); // default action বন্ধ
  e.stopPropagation(); // parent পর্যন্ত event যাবে না
});
