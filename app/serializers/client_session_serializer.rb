class ClientSessionSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :user_type

  def user_type
   return 'Client'
  end
end
