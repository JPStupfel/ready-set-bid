Rails.application.routes.draw do
  
  resources :posts
  resources :proposals, only: [:index, :create, :show, :destroy, :update]
  resources :bids, only: [:index, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 #test

#  routes to return coordincates from address
  get "/address/:loc", to: 'proposals#getAddress'

# routes for client authentication
  post '/session', to: "sessions#create"
  patch '/session', to: "sessions#update"
  delete '/session', to: "sessions#destroy"
  get '/me', to: "sessions#index"
# routes for profesional authenication
  post '/sessionPro', to: "session_pros#create"
  patch '/sessionPro', to: "session_pros#update"
  delete '/sessionPro', to: "session_pros#destroy"
  get '/mePro', to: "session_pros#index"

  
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
