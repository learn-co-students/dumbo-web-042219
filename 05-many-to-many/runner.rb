require 'pry'

require_relative 'flight'
require_relative 'passenger'
require_relative 'ticket'

bahama = Flight.new("RDU-NAS")
lax = Flight.new("JFK-LAX")
vegas = Flight.new("RDU-LAS")
brussels = Flight.new("SFO-BRN")
barcelona = Flight.new("JFK-BCN")
tokyo = Flight.new("EWR-NRT")
amsterdam = Flight.new("DUB-AMS")
ams_bcn = Flight.new("AMS-BCN")
prague = Flight.new("EWR-PRG")

john = Passenger.new("John")
seb = Passenger.new("Seb")
loune = Passenger.new("Loune")
mikey = Passenger.new("Mikey")
wei = Passenger.new("Wei")
chloe = Passenger.new("Chloe")

Ticket.new(john, bahama)
Ticket.new(john, lax)
Ticket.new(john, vegas)

Ticket.new(seb, vegas)
Ticket.new(seb, brussels)

Ticket.new(loune, barcelona)
Ticket.new(loune, tokyo)

Ticket.new(mikey, amsterdam)
Ticket.new(mikey, ams_bcn)

Ticket.new(wei, lax)
Ticket.new(wei, barcelona)

Ticket.new(chloe, prague)

binding.pry

false
