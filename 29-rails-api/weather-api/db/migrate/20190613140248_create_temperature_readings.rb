class CreateTemperatureReadings < ActiveRecord::Migration[5.2]
  def change
    create_table :temperature_readings do |t|
      t.integer :temperature

      t.timestamps
    end
  end
end
