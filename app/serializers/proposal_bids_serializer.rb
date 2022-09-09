class ProposalBidsSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :client_id, :victor_id, :lat, :lng
  has_many :posts
  has_many :bids
  belongs_to :client
end
