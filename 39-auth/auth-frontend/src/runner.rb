require "sinatra"

get "/" do
  "🦄" * 99
end

get '/cheese' do
  "🧀"
end

delete '/cheese' do
  "YOU WILL NEVER BE ABLE TO DELETE 🧀"
end
