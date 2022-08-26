class SessionsController < ApplicationController
    def create
        client = Client.create sessionParams
        if client.valid? 
            render json: client, status: 200
        else
            render json: {errors: client.errors.full_messages}
        end
        session[:user_id] = client.id
    end


    private
    def sessionParams
        params.permit :username, :password, :password_confirmation
    end
end
