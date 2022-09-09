class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: [:create, :destroy]

    def create 
        # byebug
        user = User.find_by_username(params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok

        else
            render json:{error: {User: "Not Authorized"}}, status: :unauthorized
        end
    end

    def destroy 
        session.delete :user_id
        # byebug
    end
end
