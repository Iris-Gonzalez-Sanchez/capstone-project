class AddTickerSymbolToUserStocks < ActiveRecord::Migration[7.0]
  def change
    add_column :user_stocks, :ticker_symbol, :string
  end
end
