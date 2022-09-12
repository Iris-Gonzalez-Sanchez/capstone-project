class UserStocksController < ApplicationController

    def index
        render json: UserStock.all
      end

    def show
        user_stock = UserStock.find( params[:id] )
        render json: user_stock
    end

    def destroy
        user_stock_to_destroy = UserStock.find( params[:id])
            # Destroy All Related Data
            # activity_to_destroy.signups.destroy_all
        user_stock_to_destroy.destroy
        head :no_content
    
    end


end
