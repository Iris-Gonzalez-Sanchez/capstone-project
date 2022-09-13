class UserStockSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :stock_item
  # join model
end
