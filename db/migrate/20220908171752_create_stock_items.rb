class CreateStockItems < ActiveRecord::Migration[7.0]
  def change
    create_table :stock_items do |t|
      t.string :ticker_symbol
      t.integer :price

      t.timestamps
    end
  end
end
