Rails.application.routes.draw do
  namespace :api do
   namespace :v1 do
     post "/login", to: "auth#create"
     post "/signup", to: "users#create"
     get "/profile", to: "users#profile"
     resources :problems do
        member do
          post :upvote
          post :downvote
        end
        collection do
          get :search
        end
      end
   end
 end
end
