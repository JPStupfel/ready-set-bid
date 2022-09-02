class BidsController < ApplicationController
    before_action :require_login

def index
    render json: Bid.all , status: 200
end

def create
    bid = Bid.create amount: params['amount'], proposal_id: params['proposal_id'], professional_id: session['user_id']
    if bid.valid?
        render json: bid, status: 200
    else
        render json: {error: bid.errors.full_messages}, status: 422
    end
end

private
    def require_login
        if !session[:user_id] || session[:user_type] != 'Professional'
            render json: {error: 'log in as professional first'}
        end
    end
end
