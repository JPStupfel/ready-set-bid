class ProfessionalSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :image_url
end
