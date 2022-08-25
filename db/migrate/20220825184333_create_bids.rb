class CreateBids < ActiveRecord::Migration[6.1]
  def change
    create_table :bids do |t|
      t.integer :proposal_id
      t.integer :professional_id
      t.string :amount

      t.timestamps
    end
  end
end
