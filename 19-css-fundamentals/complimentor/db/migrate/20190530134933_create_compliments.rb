class CreateCompliments < ActiveRecord::Migration[5.2]
  def change
    create_table :compliments do |t|
      t.string :message
      t.boolean :favorited
      t.integer :hug_count
      t.string :photo_url

      t.timestamps
    end
  end
end
