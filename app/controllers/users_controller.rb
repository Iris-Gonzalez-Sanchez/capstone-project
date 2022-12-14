class UsersController < ApplicationController
   skip_before_action :authenticate_user, only: [:create]

    def show
        # user = User.find(params[:id])
        render json: current_user, status: :ok
    end

    def create
        user = User.create!(user_params)
        # user.admin = true

        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end
    private

    def user_params
        params.permit(:username, :password)
    end

end
