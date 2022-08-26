class SessionProsController < ApplicationController
        def create
            professional = Professional.create sessionParams
            if professional.valid? 
                render json: professional, status: 200
            else
                render json: {errors: professional.errors.full_messages}
            end
            session[:user_id] = professional.id
        end
    
        def index
            professional = Professional.find_by id: session[:user_id]
            if professional
                render json: professional, status: 200
            else
                render json: {errors: 'professional not found'}, status: 422
            end
        end
    
        def destroy
            session.delete :user_id
            render json:{}
        end
    
        def update
            professional = Professional.find_by username: params['username']
            
            if professional
                session[:user_id] = professional.id
                render json: professional, status: 200
            else
                render json: {errors: 'professional not found'}, status: 422
            end
        end
    
    
        private
        def sessionParams
            params.permit :username, :password, :password_confirmation
        end
    
    
end
