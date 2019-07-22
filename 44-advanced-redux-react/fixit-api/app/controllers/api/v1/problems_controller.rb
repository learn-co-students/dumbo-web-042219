class Api::V1::ProblemsController < ApplicationController
  before_action :find_problem, only: [:show, :update, :destroy, :upvote, :downvote]
  skip_before_action :authorized, only: [:index, :show]

  def index
    problems = Problem.all
    render json: problems, include: "**"
  end

  def upvote
    vote = UpVote.new(user: current_user, problem: @problem)
    if vote.save
      render json: @problem, include: "**"
    else
      down_vote = DownVote.find_by(user: current_user, problem: @problem)
      down_vote.destroy if down_vote
      vote = UpVote.new(user: current_user, problem: @problem)
      if vote.save
        render json: @problem, include: "**"
      else
        render json: { errors: vote.errors.full_messages }, stats: :unauthorized
      end
    end
  end

  def downvote
    vote = DownVote.new(user: current_user, problem: @problem)

    if vote.save
      render json: @problem, include: "**"
    else
      up_vote = UpVote.find_by(user: current_user, problem: @problem)
      up_vote.destroy if up_vote
      vote = DownVote.new(user: current_user, problem: @problem)
      if vote.save
        render json: @problem, include: "**"
      else
        render json: { errors: vote.errors.full_messages }, stats: :unauthorized
      end
    end
  end

  def show
    render json: @problem
  end

  def create
    problem = Problem.new(problem_params)
    problem.user = current_user
    if problem.save
      render json: problem
    else
      render json: { errors: problem.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @problem.user == current_user
      if @problem.update(problem_params)
        render json: @problem
      else
        render json: { errors: @problem.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { errors: ["You can not edit someone else's Problem! Sorry!"] }, status: :unauthorized
    end
  end

  def destroy
    if @problem.user == current_user
      @problem.destroy
      render json: @problem
    else
      render json: { errors: ["You can not delete someone else's Problem! Sorry!"] }, status: :unauthorized
    end
  end

  def problem_params
    params.permit(:title, :description)
  end

  def find_problem
    @problem = Problem.find(params[:id])
  end
end
