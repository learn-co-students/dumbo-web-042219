class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :problems
  has_many :down_voted_problems
  has_many :up_voted_problems
end
