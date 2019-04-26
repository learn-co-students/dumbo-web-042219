class Ticket

  # @@all = []
  ALL = []

  attr_reader :flight, :passenger

  def initialize(passenger, flight)
    @passenger = passenger
    @flight = flight
    ALL << self
  end

  def self.all
    ALL
  end

end

