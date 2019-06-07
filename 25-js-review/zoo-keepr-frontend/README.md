- [ ] JS Data Structures & Iteration

The Object (hash from ruby but JS)
`{ }`, has keys and values, can access value by key name
Ex:
```js
let me = {
  firstName: 'Rishi',
  profession: 'Teacher',
  dob: '1/1/2019'
}
```
`me.firstName` gets the name, we don't need to do `me[:name]`

The Array (pretty much the same in every language)

`[ ]`, no keys, but can access indices through the int

```js
array = [
  1,
  2,
  3
]
```
`array[2]` gets you `3`


```js
array = [
  '100',
  3,
  'one hunnid',
  {
    yo: 3
  }
]
```

```js
let me = {
  name: {
    first: 'Rishi',
    last: 'Tirumala'
  }
}

```
To access the first name call `me.name.first`


- [ ] Which tools are v. important? How are they different?

### Array iterators
When you call an array's iterator, you _must_ pass in a callback function, for each individual element.

```js
const names = [{
  name: 'Dan'
}, {
  name: 'Rishi'
}, {
  name: 'Graham'
}]

function fn(obj) {
  return obj.name
}

names.map(fn)

let longNames = names.filter(obj => /* return */ obj.name.length > 3)

// add every name to the dom
names.forEach((obj) => {
  let elem = document.createElement('p')
  elem.textContent = obj.name
  body.appendChild(elem)
})

```

`map`

`filter`

`forEach`

- [ ] Loading Resources

- [ ] How to think through a deliverable?
For a GET, maybe

Step 1: Where is the data/information?

Step 2: How is the data organized?

Step 3: Where does the data need to go?

Step 4: Put it there


For a POST, maybe?

Step 1: What data are we posting?

Step 2: Where does it need to go?

Step 3: Send ittttttttt => Did it work??

Step 4: Update the page, for da user



  - [ ] Where to start in ur workflo??
- [ ] How to break down JS errors????
- [ ] Using Debugger & Breakpoints in the browser

- [ ] JS Function Syntax, especially => fns

- [ ] Fetch w/online API vs. our own server
  - [ ] How 2 async??

- [ ] How to understand what an HTML Element needs to be

- [ ] DOMContentLoaded vs. not doing that
  It's not 100% guaranteed to know that the DOM is loaded. We use it to just play it safe.
