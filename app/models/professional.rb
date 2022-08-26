class Professional < ApplicationRecord
    has_many :bids
    has_many :proposals, through: :bids

    has_secure_password
end
