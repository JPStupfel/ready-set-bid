class AddEmailToProfessional < ActiveRecord::Migration[6.1]
  def change
    add_column :clients, :email, :text
  end
end
