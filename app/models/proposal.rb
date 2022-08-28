class Proposal < ApplicationRecord
    has_many :posts
    # has_many :bids
    # has_many :professionals, through: :bids

    belongs_to :client


    
    
end
