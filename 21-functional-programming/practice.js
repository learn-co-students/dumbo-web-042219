// PROBLEM 1

// translate this ruby into JS using a JS array method

// [1,2,3,4,5,6,7,8].select do |num|
//  num.even?
// end

[1,2,3,4,5,6,7,8].filter(num => num % 2 == 0)

// PROBLEM 2

// return the titles of the following books as an array

const books = [
    {
      "title": "The Diplomat's Daughter",
      "author": "Karin Tanabe",
      "pages": 464,
    },
    {
      "title": "L'ombra del vento",
      "author": "Carlos Ruiz Zafón",
      "pages": 444,
    },
    {
      "title": "Sad Girls",
      "author": "Lang Leav",
      "pages": 368,
    },
    {
      "title": "Milk and Honey",
      "author": "Rupi Kaur",
      "pages": 208,
    },
    {
      "title": "Jaws",
      "author": "Peter Benchley",
      "pages": 288,
    }
  ]

let titles = books.map(book => book.title)


// PROBLEM 3

// Let's say GitHub has updated their API URL. That means we're using old data! Let's bring our data up-to-date.

// Create a variable called humanIssuesWithUpdatedUrl
// The value of this variable should be the mapped issues array, replacing any mention of 'api.github.com' (in issue.url) with 'api-v2.github.com'
// It should also only contain issues that were created by a human
// (i.e. the body should NOT be "This pull request has been automatically created by learn.co.")
// optional stretch goal: Make sure you don't modify the original objects in the issues array


const issues = [
  {
    "body": "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team.",
    "created_at": "2016-03-31 16:23:13 UTC",
    "comments_count": 0,
    "id": 144948778,
    "number": 7,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/basic-sinatra-forms-lab/issues/7"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-28 03:25:56 UTC",
    "comments_count": 1,
    "id": 143883618,
    "number": 3,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/angular-what-is-the-event-system-readme/issues/3"
  },
  {
    "body": "This section talks about the keywork GROUP BY but the exercise did not use that. ",
    "created_at": "2016-03-27 23:55:28 UTC",
    "comments_count": 1,
    "id": 143861795,
    "number": 11,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/sql-grouping-and-sorting-readme/issues/11"
  },
  {
    "body": "",
    "created_at": "2016-06-21 19:51:37 UTC",
    "comments_count": 0,
    "id": 161524199,
    "number": 1,
    "state": "closed",
    "url": "https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/1"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 15:36:40 UTC",
    "comments_count": 0,
    "id": 94330872,
    "number": 2,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/sinatra-routes-readme/issues/2"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 15:38:32 UTC",
    "comments_count": 0,
    "id": 94331206,
    "number": 1,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/sinatra-messages/issues/1"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 15:37:12 UTC",
    "comments_count": 0,
    "id": 94330963,
    "number": 3,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/sinatra-twitter-todo/issues/3"
  },
  {
    "body": "I'm not sure it's exactly up to whatever 'style guide' you guys might have, but there were lots of little errors.",
    "created_at": "2016-03-31 16:47:39 UTC",
    "comments_count": 1,
    "id": 144954640,
    "number": 7,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/forms-and-basic-associations-rails/issues/7"
  },
  {
    "body": "",
    "created_at": "2016-06-21 19:55:49 UTC",
    "comments_count": 0,
    "id": 161525013,
    "number": 2,
    "state": "closed",
    "url": "https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/2"
  },
  {
    "body": "Resolves issues #4 and #5 \r\n\r\nMade it clear that upper case letters should be hardcoded for this lab. Also, previous pull request updated the readme to state that colors should be read from the array. \r\n\r\n@PeterBell ",
    "created_at": "2016-03-28 14:05:56 UTC",
    "comments_count": 0,
    "id": 143985287,
    "number": 7,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/interpolation-super-power/issues/7"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-28 03:20:49 UTC",
    "comments_count": 1,
    "id": 143882852,
    "number": 2,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/angular-what-is-the-event-system-readme/issues/2"
  },
  {
    "body": "my nested hashes(hero_friends) are not completing the learn. It looks exactly like the follow along example but its saying \"expecting end, unexpected ]\"",
    "created_at": "2016-03-27 23:38:26 UTC",
    "comments_count": 0,
    "id": 143860810,
    "number": 19,
    "state": "open",
    "url": "https://api.github.com/repos/learn-co-curriculum/building-nested-hashes/issues/19"
  },
  {
    "body": "",
    "created_at": "2016-06-21 19:57:59 UTC",
    "comments_count": 0,
    "id": 161525417,
    "number": 3,
    "state": "closed",
    "url": "https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/3"
  },
  {
    "body": "",
    "created_at": "2016-06-21 20:02:55 UTC",
    "comments_count": 0,
    "id": 161526423,
    "number": 5,
    "state": "open",
    "url": "https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/5"
  },
  {
    "body": "the .rspec file in the root of the project needs the flag `--require spec_helper` otherwise you have to explicitly declare `require 'spec_helper' at top of the specs and you will get a fail since you're not loading in the environment.\r\n\r\n```\r\n# .rspec\r\n--color\r\n--format documentation\r\n--require spec_helper\r\n```",
    "created_at": "2016-03-27 17:29:08 UTC",
    "comments_count": 2,
    "id": 143830695,
    "number": 17,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/sinatra-fwitter-group-project/issues/17"
  },
  {
    "body": "",
    "created_at": "2016-06-21 20:06:14 UTC",
    "comments_count": 0,
    "id": 161527064,
    "number": 6,
    "state": "open",
    "url": "https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/6"
  },
  {
    "body": "",
    "created_at": "2016-06-21 20:06:26 UTC",
    "comments_count": 0,
    "id": 161527108,
    "number": 7,
    "state": "open",
    "url": "https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/7"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-27 21:35:39 UTC",
    "comments_count": 1,
    "id": 143850150,
    "number": 3,
    "state": "open",
    "url": "https://api.github.com/repos/learn-co-curriculum/js-create-objects-lab/issues/3"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-27 22:17:14 UTC",
    "comments_count": 1,
    "id": 143855372,
    "number": 16,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/scraping-reading/issues/16"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-27 22:11:52 UTC",
    "comments_count": 1,
    "id": 143854790,
    "number": 15,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/scraping-reading/issues/15"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-01-27 06:40:06 UTC",
    "comments_count": 1,
    "id": 129048387,
    "number": 3,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/simple-partials-lab/issues/3"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 15:34:32 UTC",
    "comments_count": 0,
    "id": 94330462,
    "number": 6,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/playlister-static-generator-with-ar/issues/6"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-31 14:54:17 UTC",
    "comments_count": 1,
    "id": 144924921,
    "number": 9,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/cancan_readme/issues/9"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-27 21:06:35 UTC",
    "comments_count": 1,
    "id": 143848056,
    "number": 2,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/js-object-methods-readme/issues/2"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-27 20:45:35 UTC",
    "comments_count": 1,
    "id": 143846624,
    "number": 30,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/using-bundler/issues/30"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-27 19:55:20 UTC",
    "comments_count": 1,
    "id": 143843124,
    "number": 29,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/using-bundler/issues/29"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-01-27 05:45:49 UTC",
    "comments_count": 1,
    "id": 129039075,
    "number": 4,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/simple-partials-reading/issues/4"
  },
  {
    "body": "",
    "created_at": "2016-06-21 20:11:29 UTC",
    "comments_count": 0,
    "id": 161528114,
    "number": 8,
    "state": "open",
    "url": "https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/8"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 15:31:10 UTC",
    "comments_count": 0,
    "id": 94329835,
    "number": 5,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/oo-neopet-html-generator/issues/5"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 15:01:58 UTC",
    "comments_count": 0,
    "id": 94324140,
    "number": 2,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/count-elements/issues/2"
  },
  {
    "body": "The h1 at the top uses \"@song.name\", but songs aren't set up that way in the db. Should be \"@song.title\". It doesn't affect the tests, so it's not noticeable unless you actually try to visit the edit path through a browser. ",
    "created_at": "2016-03-31 13:54:15 UTC",
    "comments_count": 0,
    "id": 144909174,
    "number": 3,
    "state": "open",
    "url": "https://api.github.com/repos/learn-co-curriculum/refactoring-views-with-helpers-lab/issues/3"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-31 13:18:39 UTC",
    "comments_count": 1,
    "id": 144899211,
    "number": 11,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/js-ajax-callbacks-readme/issues/11"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-31 11:37:24 UTC",
    "comments_count": 1,
    "id": 144869423,
    "number": 4,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/media-queries/issues/4"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 15:33:51 UTC",
    "comments_count": 0,
    "id": 94330315,
    "number": 5,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/playlister-static-generator-with-ar/issues/5"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-27 00:44:35 UTC",
    "comments_count": 0,
    "id": 143764577,
    "number": 8,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/partial-locals-lab/issues/8"
  },
  {
    "body": "number and conditions has the wrong answer on problem  # 15 \r\n it should be true.",
    "created_at": "2016-03-25 17:05:07 UTC",
    "comments_count": 1,
    "id": 143542834,
    "number": 26,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/booleans-ruby-readme/issues/26"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 15:31:51 UTC",
    "comments_count": 0,
    "id": 94329943,
    "number": 4,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/playlister-static-generator-with-ar/issues/4"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 15:34:23 UTC",
    "comments_count": 0,
    "id": 94330424,
    "number": 9,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/erb-templating/issues/9"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 15:01:56 UTC",
    "comments_count": 0,
    "id": 94324134,
    "number": 1,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/count-elements/issues/1"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 14:54:53 UTC",
    "comments_count": 0,
    "id": 94322722,
    "number": 4,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/oo-neopet-html-generator/issues/4"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 14:48:35 UTC",
    "comments_count": 0,
    "id": 94321483,
    "number": 23,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/23"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2015-07-10 14:12:32 UTC",
    "comments_count": 0,
    "id": 94313939,
    "number": 22,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/22"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-31 05:03:55 UTC",
    "comments_count": 1,
    "id": 144790136,
    "number": 5,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/rails-model-view-controller-readme/issues/5"
  },
  {
    "body": "",
    "created_at": "2016-06-21 20:12:10 UTC",
    "comments_count": 0,
    "id": 161528284,
    "number": 9,
    "state": "closed",
    "url": "https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/9"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-26 16:27:56 UTC",
    "comments_count": 0,
    "id": 143726621,
    "number": 2,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/angular-directive-controllers-readme/issues/2"
  },
  {
    "body": "Line wraps removed for readability.",
    "created_at": "2016-03-26 18:54:42 UTC",
    "comments_count": 1,
    "id": 143739524,
    "number": 5,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/validations-with-form_for-rails/issues/5"
  }
];

// Create a variable called humanIssuesWithUpdatedUrl
// The value of this variable should be the mapped issues array, replacing any mention of 'api.github.com' (in issue.url) with 'api-v2.github.com'
// It should also only contain issues that were created by a human
// (i.e. the body should NOT be "This pull request has been automatically created by learn.co.")
// optional stretch goal: Make sure you don't modify the original objects in the issues array

const humanIssuesWithUpdatedUrl = issues.filter((issue) => {
  return issue.body != "This pull request has been automatically created by learn.co."
}).map((issue) => {
  my_issue = JSON.parse(JSON.stringify(issue))
  my_issue.url = issue.url.replace('api.github.com', 'api-v2.github.com')
  return my_issue
})



// ==============================================================
// CLOSURES
// ==============================================================

// PROBLEM 4:

var counter = 0;
// Create a function called createCounter.
// inside the function define a variable called counter
// createCounter should return an object that has two keys, the value of each key should be a function.
// the first key should be called getCounter and the function should return the value of the variable counter.
// the second key should be called increment and increment the value of the counter variable by one
// Does your function change the value of the variable counter defined in the global scope above?
// If you call createCounter multiple times do the different counter variables conflict with eachother

const createCounter = () => {
  // let counter = 0; if you uncomment this each created counter has it's own number
  return {
    getCounter: () => counter,
    increment: () => counter++
  }
}

// PROBLEM 5:

// Newton's second law of motion states that the force of an object is equal to it's mass times it's acceleration.
// F = m * a

// The acceleration constant will be the same for any mass on a given planetary body
// For example on earth it is always 9.8 meter / second squared

// Write a function called secondLaw that receives an acceleration constant for a given planet as an argument
// and returns a function that calculates the force for a falling body on that planet according to the formula

// Here is an example of how the code should work
// const forceOnEarth = secondLaw(9.8)
// forceOnEarth(10)
// => 98

// Earth	9.8 m/s2
// the Moon	1.6 m/s2
// Mars	    3.7 m/s2
// Venus	8.87 m/s2
// Jupiter	24.5 m/s2
// the Sun	275 m/s2
