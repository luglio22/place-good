class UsersController < ApplicationController

  def index
    @user = User.new
    @users = current_user
    @product = Product.where(params[:id])
  end

  def show
    @product = Product.where(params[:id])
  end
end
