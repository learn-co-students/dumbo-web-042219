class Problem < ApplicationRecord
  belongs_to :user
  has_many :votes
  has_many :down_votes
  has_many :up_votes
end
