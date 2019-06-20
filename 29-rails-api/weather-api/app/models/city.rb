class City < ApplicationRecord
  has_many :temperature_readings
end
