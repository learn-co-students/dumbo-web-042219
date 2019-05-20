class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.string :favorite_food
      t.integer :age

      t.timestamps
    end
  end
end
