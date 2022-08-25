class PostSerializer < ActiveModel::Serializer
  include JSONAPI::Serializer
  attributes :id, :title, :image, :created_at, :updated_at, :image_url


end
