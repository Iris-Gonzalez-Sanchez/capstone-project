class StockItemSerializer < ActiveModel::Serializer
  attributes :id, :ticker_symbol, :price

  has_many :users
end
