class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :problem
  validates_uniqueness_of :problem_id, scope: :user_id
end
