Rails.application.routes.draw do
  namespace :api do
   namespace :v1 do
     post '/signup', to: 'otters#create'
     post '/login', to: 'auth#create'
     get '/profile', to: 'otters#profile'
     get '/matches', to: 'otters#matches'
     get '/liked', to: 'otters#liked_otters'
     get '/recommended', to: 'otters#recommended'

     get '/messages', to: 'messages#index'
     get '/messages/:otter_id', to: 'messages#show'
   end
 end
end
