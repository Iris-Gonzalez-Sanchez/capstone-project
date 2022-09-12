Rails.application.routes.draw do
  resources :user_stocks
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


  delete "/stock_item", to: "stock_items#destroy"
end
