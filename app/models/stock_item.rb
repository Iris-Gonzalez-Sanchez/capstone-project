class StockItem < ApplicationRecord
  belongs_to :user_stock
  has_many :users, through: :user_stock

end
