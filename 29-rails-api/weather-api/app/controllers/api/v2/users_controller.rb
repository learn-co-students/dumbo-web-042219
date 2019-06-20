class Api::V2::UsersController < ApplicationController

  def index
    render json: { hi: "I'm a user", id: 5 }
  end
end
