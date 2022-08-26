class SessionsController < ApplicationController
    def create
        client = Client.create sessionParams
        if client.valid? 
            render json: client, status: 200
        else
            render json: {errors: client.errors.full_messages}
        end
        session[:user_id] = client.id
        session[:user_type] = client.class.name
        
    end

    def index
        
        if session[:user_type] == 'Client'
            client = Client.find_by id: session[:user_id]
            if client
                render json: client, status: 200
            end
        else
            render json: {errors: 'client not found'}, status: 422
        end
    end

    def destroy
        session.delete :user_id
        session.delete :user_type
        render json:{}
        
    end

    def update
        client = Client.find_by username: params['username']
        
        if client
            session[:user_id] = client.id
            session[:user_type] = client.class.name

            render json: client, status: 200
        else
            render json: {errors: 'client not found'}, status: 422
        end
    end


    private
    def sessionParams
        params.permit :username, :password, :password_confirmation
    end
end
