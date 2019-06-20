Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :temperature_readings, only: [:index]
  resources :cities, only: [:index]


  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
    end
    namespace :v2 do
      resources :users, only: [:index]
    end
  end
end
