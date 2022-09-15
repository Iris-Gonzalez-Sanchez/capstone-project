class AddPriceToUserStocks < ActiveRecord::Migration[7.0]
  def change
    add_column :user_stocks, :price, :integer
  end
end
