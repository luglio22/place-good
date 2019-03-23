Rails.application.routes.draw do
  devise_for :users
  root "products#index"
  resources :products, only: [:index,:new, :edit, :show, :update] do
  end

  resources :users, only: [:index,:new, :edit, :show, :update] do
  end
end
