class Flight

  attr_reader :route

  def initialize(route)
    @route = route
  end

  # return all the tickets that are booked
  # but just the ones for this flight
  def tickets
    Ticket.all.select do |ticket|
      ticket.flight == self
    end
  end

  # returns an array of the passengers on this flight
  def passengers
    # tickets.map(&:passenger)
    self.tickets.map do |ticket|
      ticket.passenger
    end
  end

  def num_passengers

  end

  # caching


  # def add_tickets(ticket)
  #   @tickets << ticket
  # end

end
