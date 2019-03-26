class ProductsController < ApplicationController
  def index
    @user = current_user
  end

  def new
  end

  def create
    @product = Product.new(params[:product].permit(:title, :describe, :image))
    @product.save
    redirect_to products_path
  end
end
