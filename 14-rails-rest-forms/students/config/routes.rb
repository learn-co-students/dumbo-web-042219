Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :students
  # get "/students", to: "students#index"
  # get "/students/new", to: "students#new"
  # get "/students/:id", to: "students#show"
  # delete "/students/:id", to: "students#destroy"
end
