Rails.application.routes.draw do
  devise_for :users
  root 'objs#index'
  resources :objs, only: [:create, :destroy]
end
