class ApplicationController < ActionController::Base

  before_action :setup_voting_attrs


  def setup_voting_attrs
    unless session["votes"]
      session["votes"] = 5
    end
    @votes = session["votes"].to_i
    @can_vote = @votes > 0
  end


  def use_one_vote
    session["votes"] = @votes - 1
  end
end
