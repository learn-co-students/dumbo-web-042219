class BandsController < ApplicationController
  get '/bands/:id' do
    @band = Band.find(params[:id])
    erb :'bands/show'
  end
end
