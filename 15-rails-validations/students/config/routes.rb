Rails.application.routes.draw do
  resources :teachers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :students, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  # get "/students", to: "student#index"
  # get "/students/:id", to: "student#show"
  # delete "/students/:id", to: "student#destroy"
end
