class ProductsController < ApplicationController

  before_action :move_to_index, except: :index

  def index
    @user = current_user
  end

  def new
  end

  def create
    @product  = Product.new(title: product_params[:title], describe: product_params[:describe], image: product_params[:image], user_id: current_user.id)
    @product.save
    redirect_to products_path
  end

  def destroy
    products = Product.find(params[:id])
    if products.destroy
       redirect_to mypages_path
    else
      render :show
    end
  end

  private
  def product_params
    params.permit(:title, :describe, :image)
  end

  def move_to_index
    redirect_to :action => "index" unless user_signed_in?
  end
end
