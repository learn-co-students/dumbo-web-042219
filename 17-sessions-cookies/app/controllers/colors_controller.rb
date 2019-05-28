class ColorsController < ApplicationController

  def index
    if request.path != colors_path
      redirect_to colors_path
    end
    @colors = Color.includes(:votes).all
  end
end
