class BidsController < ApplicationController
    before_action :require_login

def index
    render json: Bid.all , status: 200
end

private
    def require_login
        if !session[:user_id] || session[:user_type] != 'Professional'
            render json: {error: 'log in as professional first'}
        end
    end
end
