Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Root path for application
  root 'enqueue#index'
  
  resources :enqueue, only: [:index] do
    collection do
      post 'add', to: 'enqueue#add'
    end
  end
  resources :info, only: [:index]
  
  namespace :admin do
    get 'controls/index'
    
  end
  
  namespace :api do
    namespace :v1 do
      resources :queue
    end
  end

  resources :docs, only: [:index] do
    collection do
      get 'queue_api'
    end
  end
end
