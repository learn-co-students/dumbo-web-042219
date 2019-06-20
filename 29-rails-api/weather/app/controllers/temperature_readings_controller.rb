class TemperatureReadingsController < ApplicationController
  before_action :set_temperature_reading, only: [:show, :edit, :update, :destroy]

  # GET /temperature_readings
  # GET /temperature_readings.json
  def index
    @temperature_readings = TemperatureReading.all
  end

  # GET /temperature_readings/1
  # GET /temperature_readings/1.json
  def show
  end

  # GET /temperature_readings/new
  def new
    @temperature_reading = TemperatureReading.new
  end

  # GET /temperature_readings/1/edit
  def edit
  end

  # POST /temperature_readings
  # POST /temperature_readings.json
  def create
    @temperature_reading = TemperatureReading.new(temperature_reading_params)

    respond_to do |format|
      if @temperature_reading.save
        format.html { redirect_to @temperature_reading, notice: 'Temperature reading was successfully created.' }
        format.json { render :show, status: :created, location: @temperature_reading }
      else
        format.html { render :new }
        format.json { render json: @temperature_reading.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /temperature_readings/1
  # PATCH/PUT /temperature_readings/1.json
  def update
    respond_to do |format|
      if @temperature_reading.update(temperature_reading_params)
        format.html { redirect_to @temperature_reading, notice: 'Temperature reading was successfully updated.' }
        format.json { render :show, status: :ok, location: @temperature_reading }
      else
        format.html { render :edit }
        format.json { render json: @temperature_reading.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /temperature_readings/1
  # DELETE /temperature_readings/1.json
  def destroy
    @temperature_reading.destroy
    respond_to do |format|
      format.html { redirect_to temperature_readings_url, notice: 'Temperature reading was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_temperature_reading
      @temperature_reading = TemperatureReading.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def temperature_reading_params
      params.require(:temperature_reading).permit(:temperature)
    end
end
