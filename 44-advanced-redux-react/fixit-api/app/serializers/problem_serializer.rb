class ProblemSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :up_votes, :down_votes, :author_id, :author_username

  def up_votes
    problem = self.object
    problem.up_votes.count
  end

  def down_votes
    problem = self.object
    problem.down_votes.count
  end

  def author_id
    problem = self.object
    problem.user.id
  end

  def author_username
    problem = self.object
    problem.user.username
  end
  # has_many :up_votes
  # has_many :down_votes
end
