class AddCityIdToTemperatureReading < ActiveRecord::Migration[5.2]
  def change
    add_column :temperature_readings, :city_id, :integer
  end
end
