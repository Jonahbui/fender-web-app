Rails.application.routes.draw do
  root 'enqueue#index'
  resources :enqueue, only: [:index]
  resources :queue, only: [:show, :index, :edit, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
