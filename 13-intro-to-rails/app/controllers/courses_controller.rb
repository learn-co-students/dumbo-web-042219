class CoursesController < ApplicationController
  def index
    @courses = Course.all
  end

  def create

  end
end
