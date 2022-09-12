class UserStockSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_many :stock_items
end
