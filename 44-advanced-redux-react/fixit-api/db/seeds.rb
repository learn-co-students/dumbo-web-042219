User.destroy_all
Problem.destroy_all

kev = User.create(username: "Kevin", password: "peanuts")
dan = User.create(username: "Dan", password: "cooldude")

Problem.create([
  {
    user_id: kev.id,
    title: "Food & Public Health",
    description: "If you live in a neighborhood where you can stop and get fresh fruit and vegetables that are affordable to you, congratulations. Unfortunately for many folks, food deserts have become a regular occurrence in New York City. Fresh produce is in essence, a luxury item instead of a human right. This has led to an extraordinary concentration of unhealthy, cheap and processed options as the main staples for many people living in food deserts, in turn generating a rise in public health problems such as obesity, diabetes, and heart disease."
  },
  {
    user_id: dan.id,
    title: "Waste & Resource Consumption",
    description: "Last but definitely not least, think about your trash. This might be one of the biggest concerns for NYC, one of the biggest ways we export our problems, and also one of the easiest ways for individuals and households to really make an impact. NYC produces more than 12,000 tons of solid waste.. Trash is a foul thing, you know this all too well from the smell of Summer Garbage and the way that takeout made your fridge smell last week. Did you know that NYC also doesn’t’ really deal with its own garbage anymore? We stopped burning our trash (bad for the air) and closed our landfills (which we are turning into parks) a while ago, so our solution is to pay someone else to dump it in their community (Thanks, Pennsylvania)."
  },
  {
    user_id: kev.id,
    title: "Air & Emissions",
    description: "The biggest contributors to poor air quality have historically been emissions from vehicles and industry. The decline of manufacturing generally means that tailpipes are the heavy hitters here. Bad air quality can contribute to illnesses like asthma, and the closer a person lives to a highway or truck route, the more likely they are to have asthma."
  },
  {
    user_id: dan.id,
    title: "Water & Ecology",
    description: "You aren’t going to believe this, but the NYC region used boast an abundance of seafood that would many anyone who enjoys $1 Oyster Happy Hour swoon with delight and jealousy. The quality of our aquatic habitats has been degraded in favor of the efficiency of our waterways and the convenience of more land (NYC has added countless football fields of land-area since long before the Revolutionary War). One of the biggest issues today is the Combined Sewer System, and the flow of raw sewage into our local waterways. This is why beaches are often closed after rainstorms- your poop is in the water!"
  },
  {
    user_id: kev.id,
    title: "Soil & Land Use",
    description: "Many former industrial sites are still full of contaminants from their previous occupants- these are designated Brownfields by the City and there is a length process to get this land cleaned up and ready for reuse. Chemicals can remain in soils for years to come, causing all serious effects if you happen to live, shop, or work near them."
  }
])
