class AnimalsController < ApplicationController
  def create
    @species = Species.find_or_create_by(name: params[:species])
    @animal = Animal.create(name: params[:name], gender: params[:gender].to_i, species: @species)

    render json: @animal
  end

  def show
    @animal = Animal.find_by(id: params[:id])
    render json: @animal
  end

  def index
    @animals = Animal.all
    render json: @animals
  end
end
