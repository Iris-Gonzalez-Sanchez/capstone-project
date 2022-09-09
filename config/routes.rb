Rails.application.routes.draw do
  resources :stock_items
  resources :users
  resources :sessions
  # resources :controller

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"

  # get '*path',
  #     to: 'fallback#index',
  #     constraints: ->(req) { !req.xhr? && req.format.html? }


  # delete "/logout", to: "sessions#destroy"
end
