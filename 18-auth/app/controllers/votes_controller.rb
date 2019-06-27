class VotesController < ApplicationController

  # skip_before_action :verify_authenticity_token

  before_action :authenticate, only: [:index, :destroy, :create]

  def create
    if @can_vote
      @vote = Vote.create(color_id: params[:color_id], user_id: @logged_in_user.id)
      use_one_vote
    end
    redirect_to colors_path
  end

  def index
    @votes = Vote.all.sort_by {|vote| vote.created_at.to_i * -1}
  end

  def destroy
    @vote = Vote.find(params[:id])
    if @logged_in_user.id == @vote.user_id
      @vote.destroy
      redirect_to votes_path
    else
      response.status_code = 401
    end
  end


end

