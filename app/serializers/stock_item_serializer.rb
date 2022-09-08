class StockItemSerializer < ActiveModel::Serializer
  attributes :id, :ticker_symbol, :price
end
