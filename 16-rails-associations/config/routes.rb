Rails.application.routes.draw do
  resources :exams
  resources :teachers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :students
  # get "/students", to: "student#index"
  # get "/students/:id", to: "student#show"
  # delete "/students/:id", to: "student#destroy"
end
