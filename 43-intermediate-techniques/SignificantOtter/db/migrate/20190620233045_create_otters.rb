class CreateOtters < ActiveRecord::Migration[5.2]
  def change
    create_table :otters do |t|
      t.string :email
      t.string :name
      t.string :password_digest
      t.text :interests

      t.timestamps
    end
  end
end
