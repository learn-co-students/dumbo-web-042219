// Why event listeners? Create event listeners
// Distinguish between event types
// some common types: DOMContentLoaded, click, keydown vs keyup vs keypress, submit
// Explain when and why to use event listeners, and what to do with event objects
// event properties & target (& children)
// Write event listeners as stand-alone functions and in-line functions

// Use event listeners to manipulate the DOM
// Iterate through a list and add event listeners that change their styling properties and/or text on click
// Add an event listener to a div that on keydown adds that key to the text of one or more DOM elements.
// Add a button that starts and stops a timer



// function doStuff() { console.log("yay") }
// // when DOMContentLoaded happens on document, doStuff
// document.addEventListener("DOMContentLoaded", doStuff)

function makeTextStrong(e) {
  let text = e.target.innerText
  e.target.innerHTML = `<strong>${text}</strong>`
}

document.addEventListener("DOMContentLoaded", function(e) {
    const body = document.querySelector('body')

    // document.addEventListener("scroll", (e) => console.log(window.scrollY))

    // document.addEventListener("mousemove", (e) => {
    //   console.log(`x: ${e.clientX}, y: ${e.clientY}`)
    // })

    commentsBox = document.querySelector('#comments')
    commentsBox.addEventListener("mouseenter", (e) => {
      commentsBox.style.backgroundColor = "green"
      // console.log("YOU HOVERED OVER THE COMMENTS BOX")
    })

    commentsBox.addEventListener("mouseleave", (e) => {
      commentsBox.style.backgroundColor = "rgb(245, 245, 250)"
      // console.log("YOU LEFT OVER THE COMMENTS BOX")
    })

    //
    // body.addEventListener("keypress", (e) => {
    //   if (e.keyCode == 13) {
    //     alert("YOU HIT ENTER")
    //   }
    //   if (e.keyCode == 32) {
    //     alert("SPACE IS THE PLACE")
    //   }
    //   console.log(`${e.key}: ${e.keyCode}`)
    // })

    const form = document.querySelector('#comment-form')
    const commentsContainer = document.querySelector('#comments-container')
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      // 2 ways to get text from form
      // 1: use indices on event.target, like event.target[0] to get input nodes
      // * 2: name your inputs, call event.target.nodeName <---

      // how to get extra metadata about the form
      // target dataset

      let p = document.createElement('p')
      p.innerText = e.target.commentInput.value
      commentsContainer.appendChild(p)

      form.reset()
    })

    const namesUl = document.querySelector('#names')
    for (let nameLi of namesUl.children) {
      nameLi.addEventListener("click", makeTextStrong)
    }

    const hiP = document.querySelector('#hi')
    hiP.addEventListener("mouseenter", makeTextStrong)



    // what is event delegation? bubbling?
    // Delegate events using the event.target, get info from event.target.dataset

    helicopter = document.querySelector('#helicopter-parent')
    alertBtn = document.querySelector('#alertBtn')
    parent1 = document.querySelector('#parent1')

    const logFn = (e) => {
      return console.log(`you clicked me! ${e.currentTarget.id}`)
    }


    // helicopter.addEventListener("click", logFn)
    // alertBtn.addEventListener("click", logFn)
    // parent1.addEventListener('click', logFn)

    // Make a delete listener that
    // deletes any element on the page onClick
    // body.addEventListener("click", (e) => {
    //   e.target.remove()
    // })

    helicopter.addEventListener("click", (e) => {
      if (e.target.tagName == "BUTTON") {
        switch(e.target.dataset.name) {
          case "alert":
            alert("ME!")
            break;
          case "log":
            console.log("something")
            break;
          case "error":
            console.error("something bad happen")
            break;
          default:
            alert("Idk how to handle this")
        }
      }
    })



})
