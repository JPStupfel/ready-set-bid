class AddLngToProposals < ActiveRecord::Migration[6.1]
  def change
    add_column :proposals, :lng, :float

  end
end
