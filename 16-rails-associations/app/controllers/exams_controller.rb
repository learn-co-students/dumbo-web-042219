class ExamsController < ApplicationController
  def new
    @exam = Exam.new
  end

  def create
    @exam = Exam.create(exam_params)
    redirect_to @exam.teacher
  end

  private

  def exam_params
    params.require(:exam).permit(:grade, :teacher_id, :student_id)
  end
end
