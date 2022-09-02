class BidSerializer < ActiveModel::Serializer
  attributes :id, :proposal_id, :professional_id, :amount, :professional_name, :professional_image

  belongs_to :professional

end
