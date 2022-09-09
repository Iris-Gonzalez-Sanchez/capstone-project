class StockItemsController < ApplicationController

    def index
        render json: StockItem.all
      end

    def show
        stock_item = StockItem.find( params[:id] )
        render json: stock_item
    end

    def destroy
        stock_item_to_destroy = StockItem.find( params[:id])
            # Destroy All Related Data
            # activity_to_destroy.signups.destroy_all
        stock_item_to_destroy.destroy
        head :no_content
    
    end

end
