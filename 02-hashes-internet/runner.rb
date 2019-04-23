require 'bundler'
Bundler.require

puts "Welcome to book searcher".blue

response = RestClient.get 'https://www.googleapis.com/books/v1/volumes?q=spice+girls'

books_hash = JSON.parse(response.body)
# binding.pry

false

