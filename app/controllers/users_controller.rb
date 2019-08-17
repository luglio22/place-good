class UsersController < ApplicationController

  def index
    @users = User.new
    @user = current_user
    @product = Product.where(params[:id])
  end

  def show
    @product = Product.where(params[:id])
  end
end
