// It might be a good idea to add event listener to make sure this file 
// only runs after the DOM has finshed loading. 


function likeQuote(event){

  const quoteId = parseInt(event.currentTarget.dataset.id)

  // here would be a place you could do optimistic rendering
  console.log("opti rendo")


  fetch("http://localhost:3000/likes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //what we're sending
      "Accept": "application/json" //what we'll accept back
    },
    body: JSON.stringify({ quoteId: quoteId })
  })
    .then(res => res.json())
    .then(function(){
      const classOfElement = ".quote-" + quoteId + "-likes"
      console.log(classOfElement)
      const numberOfLikesElement = document.querySelector(classOfElement)
      const numberOfLikes = parseInt(numberOfLikesElement.innerText)
      const newNumberOfLikes = numberOfLikes + 1
      numberOfLikesElement.innerText = newNumberOfLikes
    })

  // here would be a place you could do optimistic rendering
   console.log("opti rendo")
}

function slapOneQuoteOnTheDom(quote, quoteList){

  const li = document.createElement("li")
  li.class = "quote-card"
  // console.log(quote)
  li.innerHTML = `
    <blockquote class="blockquote">
      <p class="mb-0">${ quote.quote }</p>
      <footer class="blockquote-footer">${ quote.author }</footer>
      <br>
      <button class='btn-success js-like-button' data-id='${quote.id}'>Likes: <span class="js-number-of-likes quote-${ quote.id }-likes">${ quote.likes.length }</span></button>
      <button class='btn-danger'>Delete</button>
    </blockquote>`

  quoteList.append(li)

  const likeButton = li.querySelector(".js-like-button")

  likeButton.addEventListener("click", likeQuote)

}

function slapQuotesOnTheDom(quotes){
  const quoteList = document.getElementById("quote-list")
  // identify the parent and inject innerHTML
  quotes.forEach(function(quote) { 
    slapOneQuoteOnTheDom(quote, quoteList) 
  })
  
  // generate each element with createElement
}

document.addEventListener("DOMContentLoaded", function(){
  fetch("http://localhost:3000/quotes?_embed=likes")
    .then(response => response.json())
    .then(data => slapQuotesOnTheDom(data))
    // .then(function(response){
    //   return response.json();
    // })
    // .then(function(data){
    //   console.log(data)
    // })
})

