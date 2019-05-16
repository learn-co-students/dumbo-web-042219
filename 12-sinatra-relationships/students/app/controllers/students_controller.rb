class StudentsController < ApplicationController
  get '/students' do
    @students = Student.all
    erb :'students/index'
  end

  get '/students/new' do
    @bands = Band.all
    @student = Student.new
    erb :'students/new'
  end

  get '/students/:id' do
    @student = Student.find(params[:id])
    erb :'students/show'
  end

  post '/students' do
    @student = Student.create(params[:student])
    redirect to "/students/#{@student.id}"
  end

  get '/students/:id/edit' do
    @bands = Band.all
    @student = Student.find(params[:id])
    erb :'students/edit'
  end

  put '/students/:id' do
    @student = Student.find(params[:id])
    @student.update(params[:student])
    redirect to "/students/#{@student.id}"
  end

  delete '/students/:id' do
    @student = Student.find(params[:id])
    @student.destroy
    redirect '/students'
  end

  # def fetch_student
  #   @student = Student.find(params[:id])
  # end
end
