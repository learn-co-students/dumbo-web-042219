class UpVoteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :problem_id
  # belongs_to :user
  # belongs_to :problem
end
