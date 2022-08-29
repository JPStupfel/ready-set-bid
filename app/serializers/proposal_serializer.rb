class ProposalSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :client_id, :victor_id, :lat, :lng

  has_many :posts
end
