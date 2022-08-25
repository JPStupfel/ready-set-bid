Rails.application.routes.draw do
  
  resources :posts
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "/latest", to: 'posts#latest'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/api', to: "api#index"

end
