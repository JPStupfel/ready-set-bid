class SessionProsController < ApplicationController
        
    #used to signup
    def create
            professional = Professional.create sessionParams
            if professional.valid? 
                render json: professional, serializer: ProfessionalSessionSerializer, status: 200
            else
                render json: {errors: professional.errors.full_messages}
            end
            session[:user_id] = professional.id
            session[:user_type] = professional.class.name
        end

        #used to check if logged in
        def index
            if session[:user_type] == 'Professional'
                professional = Professional.find_by id: session[:user_id]
                if professional
                    render json: professional, serializer: ProfessionalSessionSerializer, status: 200
                else 
                    render json: {errors: 'professional not found'}, status: 422
                end
            else
                render json: {errors: 'professional not found'}, status: 422
            end
        end
        
        #used to log out
        def destroy
            session.delete :user_id
            session.delete :user_type
            render json:{}
        end

        #used to log in
        def update
            professional = Professional.find_by username: params['username']
            if professional && professional.authenticate(params[:password])
                session[:user_id] = professional.id
                session[:user_type] = professional.class.name
                render json: professional, serializer: ProfessionalSessionSerializer, status: 200
            else
                render json: {errors: 'Incorrect Login Information'}, status: 422
            end
        end
    
        private
        def sessionParams
            params.permit :username, :password, :password_confirmation, :image_url
        end
    
    
end
