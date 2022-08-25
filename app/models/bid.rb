class Bid < ApplicationRecord
    belongs_to :professional
    belongs_to :proposal
end
