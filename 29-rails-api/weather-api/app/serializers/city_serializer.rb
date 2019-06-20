class CitySerializer < ActiveModel::Serializer
  attributes :name
  has_many :temperature_readings
end
