class UserStock < ApplicationRecord
  belongs_to :user
  belongs_to :stock_item
end
