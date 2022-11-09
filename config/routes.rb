Rails.application.routes.draw do
  resources :users
    resources :posts
  
    # Route to create session and authenticate user
    post "/login", to: "sessions#create"

    # Persist current user until logout
    get "/auth", to: "users#show"

    # Logout Route
    delete '/logout', to: 'sessions#destroy'

    post "/users", to: "users#create"

    get "/users", to: "users#index"

    # Show every post in the database
    get "/post", to: "posts#index"

    # Show posts that belong to current user
    get '/post/:id', to: "posts#show"

    # Create post
    post "/post", to: "posts#create"

    # Update post
    patch "/post/:id", to: "posts#update"

    # Delete post
    delete "/post/:id", to: "posts#destroy"

    get "/tags/:id", to: "tags#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
