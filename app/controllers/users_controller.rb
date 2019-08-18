class UsersController < ApplicationController

  def index
    @users = User.new
    @user = current_user
    @product = Product.where(user_id: current_user.id)
  end

  def show
    @product = Product.where(user_id: current_user.id)
  end
end
