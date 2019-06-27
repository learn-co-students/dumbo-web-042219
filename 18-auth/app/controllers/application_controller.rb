class ApplicationController < ActionController::Base

  before_action :setup_global_errors, :setup_user_stuff

  private


  def use_one_vote
    session["votes"] = session["votes"] - 1
  end

  def log_in!(user)
    session[:user_id] = user.id
  end

  def setup_global_errors
    @errors = flash[:errors]
  end 

  def logged_in?
    !!session[:user_id]
  end

  def setup_user_stuff
    if session["user_id"]
      @logged_in_user = User.find(session["user_id"])
      setup_voting_attrs
    end
  end 
  
  def setup_voting_attrs
    # session["votes"] ||= 5
    # @remaining_votes = session["votes"].to_i
    @remaining_votes = @logged_in_user.remaining_votes
    @can_vote = @remaining_votes > 0
  end

  def authenticate
    redirect_to new_session_path unless logged_in?
  end

end