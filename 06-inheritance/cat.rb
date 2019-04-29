class Cat < Animal

  attr_reader :num_lives

  def initialize(name)
    super
    @num_lives = 9
    @thing_this_animal_says = "Miau"
  end

  def die
    @num_lives -= 1
    super
  end

end