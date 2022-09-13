class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  
  has_many :stock_items
end
