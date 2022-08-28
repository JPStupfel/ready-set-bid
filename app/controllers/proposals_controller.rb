class ProposalsController < ApplicationController
    before_action :require_login
    
    def index
        proposals = Proposal.all
        render json: proposals, status: 200
    end

    private
    def require_login
        if !session[:user_id] 
            render json: {error: 'log in first'}
        end
    end

end
