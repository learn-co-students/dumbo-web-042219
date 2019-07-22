class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :to_otter_id
      t.integer :from_otter_id
      t.string :text
    end
  end
end
