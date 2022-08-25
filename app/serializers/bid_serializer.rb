class BidSerializer < ActiveModel::Serializer
  attributes :id, :proposal_id, :professional_id, :amount
end
