class AddLatToProposals < ActiveRecord::Migration[6.1]
  def change
    add_column :proposals, :lat, :float
  end
end
