class StockItems < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :user_stock, :text, default: [], array:true

  end
end
