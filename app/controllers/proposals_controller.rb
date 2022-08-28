class ProposalsController < ApplicationController

    def index
        proposals = Proposal.all
        render json: proposals, status: 200
    end
end
