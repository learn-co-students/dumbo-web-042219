json.extract! temperature_reading, :id, :temperature, :created_at, :updated_at
json.url temperature_reading_url(temperature_reading, format: :json)
