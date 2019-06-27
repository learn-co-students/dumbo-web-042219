class AddUserIdToVote < ActiveRecord::Migration[5.2]
  def change
    add_reference :votes, :user, index: true, foreign_key: true
  end
end
