class AddTimestampsColumnToMessages < ActiveRecord::Migration[5.2]
  def change
    add_timestamps(:messages)
  end
end
