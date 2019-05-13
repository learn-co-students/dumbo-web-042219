require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get '/potato' do
    erb :potato
  end

  get '/cookies' do
    @test = "I am defined in the controller"
    # binding.pry
    query = params["q"]
    if query
      @cookies = Cookie.all.where(name: query)
    else
      @cookies = Cookie.all
    end
    erb :cookies
  end

end
