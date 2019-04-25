require 'pry'
require_relative 'tweet'
require_relative 'user'

coffee_dad = User.new("coffee_dad")
ariana_grande = User.new("ariana_grande")

coffee_dad.post_tweet("Drinking coffee")
coffee_dad.post_tweet("Having #a coffee")
coffee_dad.post_tweet("I love coffee")
coffee_dad.post_tweet("The darkness of the soul is upon me")
coffee_dad.post_tweet("It's coffee #time")
coffee_dad.post_tweet("Black coffee")

ariana_grande.post_tweet("i can’t process this or breathe hold on")
ariana_grande.post_tweet("thank u, next")


binding.pry

false

