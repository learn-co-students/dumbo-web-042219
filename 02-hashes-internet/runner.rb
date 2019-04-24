require 'bundler'
Bundler.require

puts "Welcome to book searcher".blue
puts "Please type a search term".yellow

search_term = gets.chomp.gsub(" ", "+")

url = "https://www.googleapis.com/books/v1/volumes?q=#{search_term}"

response = RestClient.get url

books_hash = JSON.parse(response.body)

# first_book_title = books_hash["items"].first["volumeInfo"]["title"]

# just_titles = []
# books_hash["items"].each do |book_hash|
#   just_titles << book_hash["volumeInfo"]["title"]
# end


just_titles = books_hash["items"].map do |book_hash|
  book_hash["volumeInfo"]["title"]
end

just_titles.each do |title|
  puts title.green
end


binding.pry
# puts first_book_title

false

