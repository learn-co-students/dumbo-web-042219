class UsersController < ApplicationController

  def new
    @user = User.new
  end


  def create
    # byebug
    
    # bcrypt the password
    # @password_digest = BCrypt::Password.create(user_params[:password])
    # @user = User.new
    # @user.username = user_params[:username]
    # @user.password_digest = @password_digest
    # # save to the database
    # @user.save

    # @user = User.create({ username: user_params[:username], 
    #   password_digest: BCrypt::Password.create(user_params[:password]) })
    
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      redirect_to colors_path
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_path
    end


    # redirect to homepage
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end