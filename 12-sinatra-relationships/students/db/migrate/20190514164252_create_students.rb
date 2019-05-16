class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.string :favorite_band
      t.string :favorite_movie
      t.integer :age
    end
  end
end
