puts "👥 Seeding users..."
user1 = User.create(username: 'TiffanCo', password: 'testy')
user2 = User.create(username: 'Colca3', password: 'zesty')
puts "Users seeded!"

puts "Seeding User_stocks..."
list1 = UserStock.create(user: user1, stock_items:[stock_item1, stock_item2])
list2 = UserStock.create(user: user2, stock_items: [stock_item9,stock_item7])

puts "- 📈📉 Seeding stock_items..."
stock_item1 = StockItem.create(ticker_symbol: 'AAPL', price: '154',  )
stock_item2 = StockItem.create(ticker_symbol: 'DOCU', price: '56')
stock_item3 = StockItem.create(ticker_symbol: 'PG', price: '138')
stock_item4 = StockItem.create(ticker_symbol: 'JNJ', price: '165')
stock_item5 = StockItem.create(ticker_symbol: 'LYFT', price: '17')
stock_item6 = StockItem.create(ticker_symbol: 'KO', price: '62')
stock_item7 = StockItem.create(ticker_symbol: 'GOOG', price: '109')
stock_item8 = StockItem.create(ticker_symbol: 'CLX', price: '145')
stock_item9 = StockItem.create(ticker_symbol: 'NKE', price: '108')
puts "Stock_items seeded!"



puts "✅ Done seeding!"