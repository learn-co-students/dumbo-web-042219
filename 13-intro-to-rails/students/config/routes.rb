Rails.application.routes.draw do
  resources :potatos, only: [:index, :show]
  # get "/potatos", to: "potatos#index"
  #
  # get "/potatos" do
  #   # do some stuff
  # end
  # get "/potatos/:id", to: "potatos#show"
  # get "/potatos/:id/edit", to: "potatos#edit"
  # delete "/potatos/:id", to: "potatos#delete"
  # get "/hello", to: "potatos#sup"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
