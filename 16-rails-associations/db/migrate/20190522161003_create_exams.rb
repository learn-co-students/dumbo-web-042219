class CreateExams < ActiveRecord::Migration[5.2]
  def change
    create_table :exams do |t|
      t.integer :grade
      t.belongs_to :teacher, foreign_key: true
      t.belongs_to :student, foreign_key: true

      t.timestamps
    end
  end
end
