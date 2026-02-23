---

## **File 2 – ANSWERS_English.md**

```markdown
# Assignment 4 – Questions & Answers

### 1. Difference between getElementById, getElementsByClassName, querySelector / querySelectorAll
- `getElementById` → Selects a single element by its ID.  
- `getElementsByClassName` → Returns all elements with the same class (HTMLCollection).  
- `querySelector` → Returns the first matching element using CSS selector.  
- `querySelectorAll` → Returns all matching elements using CSS selector (NodeList).

---

### 2. How to create and insert a new element into the DOM
```js
let div = document.createElement("div");
div.textContent = "Hello World";
div.classList.add("job-card");
document.querySelector(".jobs-section").appendChild(div);
3. What is Event Bubbling and how it works

Event propagates from child element to parent elements.

Example: Clicking a button inside a div triggers the parent div click event unless stopPropagation() is used.

4. What is Event Delegation and why it is useful

Attaching a listener on parent element to handle child elements’ events.

Advantage: No need to add separate listeners for dynamically added elements.

document.querySelector(".jobs-section").addEventListener("click", function(e){
    if(e.target.classList.contains("interview-btn")){
        console.log("Interview clicked!");
    }
});
5. Difference between preventDefault() and stopPropagation

preventDefault() → Prevents browser default action (like following a link).

stopPropagation() → Stops event from bubbling to parent elements.