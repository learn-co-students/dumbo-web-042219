class ApplicationController < ActionController::API
  before_action :authorized

  def encode_token(user)
    JWT.encode(user_payload(user), secret, "HS256")
  end

  def user_payload(user)
    { user_id: user.id }
  end

  def secret
    Rails.application.credentials.my_app_secret
  end

  def token
    request.headers["Authorization"].split(' ')[1] if request.headers["Authorization"]
  end

  def decoded_token
    begin
      JWT.decode token, secret, true, { algorithm: "HS256" }
    rescue JWT::DecodeError
      nil
    end
  end

  def current_user
    User.find(decoded_token[0]["user_id"]) if decoded_token
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render json: { message: "Please log in" }, status: :unauthorized unless logged_in?
  end
end
