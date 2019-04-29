class Animal

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def die
    "urk."
  end

  def speak
    unless @thing_this_animal_says
      raise NotImplementedError.new
    end
    @thing_this_animal_says * 10
  end

  # def speak
  #   if self.class == Cat
  #     "Miau"
  #   elsif self.class == Dog
  #     "Arf"
  #   elsif self.class == Fish
  #     "Blub"
  #   else
  #     raise NotImplementedError.new
  #   end
  # end
  
end