class DropTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :users
    drop_table :tasks
    drop_table :projects
  end
end
