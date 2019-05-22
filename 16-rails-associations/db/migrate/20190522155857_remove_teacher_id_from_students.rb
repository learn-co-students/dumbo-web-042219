class RemoveTeacherIdFromStudents < ActiveRecord::Migration[5.2]
  def change
    remove_column :students, :teacher_id, :integer
  end
end
