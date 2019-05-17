class PotatosController < ApplicationController
  def index
    @potatos = Potato.all
    render :index
  end
  def show
  end
end
