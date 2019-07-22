class Api::V1::OttersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  # before_action :set_otter, only: [:show, :update, :destroy]
  #
  # def index
  #   @otters = Otter.all
  #
  #   render json: @otters
  # end
  #
  def profile
    render json: { otter: OtterSerializer.new(current_otter) }, status: :accepted
  end

  def create
    @otter = Otter.new(otter_params)
    @otter.password = params[:password]

    if @otter.save
      render json: OtterSerializer.new(@otter), status: :created
    else
      render json: @otter.errors, status: :unprocessable_entity
    end
  end

  def matches
    render json: serialized_matched_otters
  end

  def liked_otters
    render json: serialized_liked_otters
  end

  def recommended
    render json: serialized_recommended_otters
  end

  # def update
  #   if @otter.update(otter_params)
  #     render json: @otter
  #   else
  #     render json: @otter.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # def destroy
  #   @otter.destroy
  # end
  #
  private

    # def set_otter
    #   @otter = Otter.find(params[:id])
    # end
    #
    def otter_params
      params.require(:otter).permit(:email, :name, :password, :interests)
    end

    def serialized_matched_otters
      current_otter.matched_otters.map do |otter|
        OtterSerializer.new(otter).as_json
      end
    end

    def serialized_liked_otters
      current_otter.liked_otters.map do |otter|
        OtterSerializer.new(otter).as_json
      end
    end

    def serialized_recommended_otters
      Otter.all.filter do |otter|
        otter != current_otter && !current_otter.liked_otters.include?(otter)
      end.sample(5)
    end
end
