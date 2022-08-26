Rails.application.routes.draw do
  
  resources :posts
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 #test

  get "/latest", to: 'posts#latest'
  get '/api', to: "api#index"

  post '/session', to: "sessions#create"
  delete '/session', to: "sessions#destroy"

  get '/me', to: "sessions#index"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
