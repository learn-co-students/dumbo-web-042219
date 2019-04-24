class BankAccount

  attr_reader :balance #, :name
  attr_accessor :name #both getter and setter

  @@all = []

  def initialize(name, balance)
    @name = name
    @balance = balance
    @@all << self
  end


  def win_the_lottery
    @balance += 1_000_000
    puts "#{ name } won the lottery"
  end

  def self.all
    @@all
  end


  # def balance #instance method #getter
  #   @balance
  # end

  # def name #getter
  #   @name
  # end

  # def name=(value) #setter
  #   @name = value
  # end

end

