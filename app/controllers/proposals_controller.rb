require 'uri'
require 'net/http'


class ProposalsController < ApplicationController

    before_action :require_login

    
    def index
        proposals = Proposal.all
        render json: proposals, status: 200
    end

    # return coordinates from address in body
    def getAddress
       location = getCoords(params['loc'])
       render json: location, status: 200
    end

    def create
        proposal = Proposal.create( title: params['title'], description: params['description'], lat: params['lat'], lng: params['lng'], client_id: params['client_id'], victor_id: nil)
        if proposal.valid?
            render json: proposal, status: 200  
        else
            render json: {error: proposal.errors.full_message}, status: 422
        end
    end

    def show
        proposal = Proposal.find_by id: params['id']
        if proposal
            render json: proposal, serializer: ProposalBidsSerializer, status: 200
        else
            render json: {error: 'Proposal Not Found'}, status: 422
        end

        
    end

    def destroy
        proposal = Proposal.find_by id: params['id']
        if proposal
            proposal.destroy
            render json: {}, status: 204
        else
            render json: {error: 'proposal not found'}, status: 422
        end
    end

    def update
        
        proposal = Proposal.find_by id: params['id']
        
        if proposal
            
            # proposal.update victor_id: params['victor_id']
             proposal.update proposalParams
            render json: proposal, status: 202
        else
            render json: {error: 'Proposal Not Found'}, status: 422
        end

    end

    private
    
    def require_login
        if !session[:user_id] 
            render json: {error: 'log in first'}
        end
    end

    # return coordincates from address
    def getCoords address
        uri = URI("https://maps.googleapis.com/maps/api/geocode/json?address='#{address}'&key=#{ENV['API_KEY']}")
        res = Net::HTTP.get_response(uri)
        return JSON(res.body)['results'][0]['geometry']['location']
    end

    def proposalParams
        params.permit(:title, :description, :client_id, :victor_id, :lat, :lng)
    end

end
