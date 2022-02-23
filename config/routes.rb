Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Root path for application
  root 'enqueue#index'
  
  resources :enqueue, only: [:index]
  resources :info, only: [:index]
  resources :queue

  namespace :admin do
    get 'test/index'
    
  end

  resources :docs, only: [:index] do
    collection do
      get 'queue_api'
    end
  end
end
