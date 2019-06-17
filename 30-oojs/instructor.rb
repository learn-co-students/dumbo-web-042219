require 'pry'


class Instructor

  attr_reader :name, :full_name

  # constructon
  def initialize(name, full_name) 
    @name = name
    @full_name = full_name
  end

  def introduction
    "Hello, I'm #{ self.name }!"
  end


end


binding.pry


