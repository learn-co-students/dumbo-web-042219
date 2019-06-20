# require_relative '../serializers/temperature_reading_serializer'

class TemperatureReadingsController < ApplicationController

  def index
    temperature_readings = TemperatureReading.all
    render json: temperature_readings
    # render json: TemperatureReadingSerializer.new(temperature_readings).serializable_hash
  end

end
