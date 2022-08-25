class CreateProposals < ActiveRecord::Migration[6.1]
  def change
    create_table :proposals do |t|
      t.string :title
      t.string :description
      t.integer :client_id
      t.integer :victor_id

      t.timestamps
    end
  end
end
