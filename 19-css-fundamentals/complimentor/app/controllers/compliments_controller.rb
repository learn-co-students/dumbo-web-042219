class ComplimentsController < ApplicationController
  def index
    @compliments = Compliment.all
  end

  def show
    @compliment = Compliment.find(params[:id])
  end
end
