class CreateSpiceGirls < ActiveRecord::Migration[5.2]
  def change
    create_table :spice_girls do |t|
      t.string :name
      t.string :adjective
      t.integer :spicyness
      t.datetime :birth_date
      t.timestamps #created_at and updated_at
    end
  end
end
