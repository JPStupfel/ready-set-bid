class AddProposalIdToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :proposal_id, :integer
  end
end
