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


    def create
        user_stock = UserStock.create!(strong_params)
        render json: user_stock status: :created
    end

private

def strong_params
    params.permit(:price, :ticker_symbol)
end 

end
