class User < ApplicationRecord
  has_secure_password
  has_many :problems
  has_many :votes
  has_many :up_votes
  has_many :down_votes
  has_many :down_voted_problems, through: :down_votes, source: :problem
  has_many :up_voted_problems, through: :up_votes, source: :problem
end
