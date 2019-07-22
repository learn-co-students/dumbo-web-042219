class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @otter = Otter.find_by(email: params[:email])
    if @otter && @otter.authenticate(params[:password])
      token = encode_token({ otter_id: @otter.id })
      render json: { otter: OtterSerializer.new(@otter), jwt: token }, status: :accepted
    else
      render json: { message: 'Invalid email or password' }, status: :unauthorized
    end
  end
end
