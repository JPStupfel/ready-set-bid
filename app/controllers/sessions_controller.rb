class SessionsController < ApplicationController
    
    #used to signup
    def create
        client = Client.create sessionParams
        if client.valid? 

            session[:user_id] = client.id
            session[:user_type] = client.class.name    
            render json: client, 
            serializer: ClientSessionSerializer, 
            status: 200
        else
            render json: {errors: client.errors.full_messages}
        end

    end

    #used to check if logged in
    def index
        
        if session[:user_type] == 'Client'
            
            client = Client.find_by id: session[:user_id]
            if client
                render json: client, 
                serializer: ClientSessionSerializer, 
                status: 200
            else
                render json: {errors: 'client not found'}, status: 422
            end
        else
            render json: {errors: 'client not found'}, status: 422
        end
    end

    #used to logout
    def destroy
        session.delete :user_id
        session.delete :user_type
        render json:{}
        
    end

    #used to login
    def update
        client = Client.find_by username: params['username']
        
        if client &.authenticate(params[:password])
            session[:user_id] = client.id
            session[:user_type] = client.class.name

            render json: client, 
            serializer: ClientSessionSerializer, 
            status: 200
        else
            render json: {errors: 'client not found'}, status: 422
        end
    end


    private
    def sessionParams
        params.permit :username, :password, :password_confirmation, :image_url, :email
    end
end
