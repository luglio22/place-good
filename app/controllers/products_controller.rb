class ProductsController < ApplicationController
  def index
    @user = current_user
  end

  def new
    @oroduct = Product.new
  end

  def create
    product = params[:product].permit(:title, :describe, :image)
    Product.create(product)
    redirect_to products_path
  end
end
