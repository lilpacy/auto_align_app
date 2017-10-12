Rails.application.routes.draw do
  root 'objs#index'
  resources :objs, only: [:create]
end
