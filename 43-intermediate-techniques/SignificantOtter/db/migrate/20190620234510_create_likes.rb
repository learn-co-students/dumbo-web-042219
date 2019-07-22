class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liking_otter_id
      t.integer :liked_otter_id
      t.timestamps
    end
  end
end
