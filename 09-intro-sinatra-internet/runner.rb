require "sinatra"


get "/" do
 "🦄" * 100
end

get '/potato' do
  "<h1>🥔</h1>"
end

delete '/potato' do
  "<h1>YOU WILL NEVER DELETE 🥔</h1>"
end
