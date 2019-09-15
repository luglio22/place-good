class ProductsController < ApplicationController

  before_action :move_to_index, except: :index

  def index
    @user = current_user
    @producta = Product.all.order("id desc").limit(9)
  end

  def new
    @products = Product.new
  end


  def show
    @product = Product.find(params[:id])
  end

  def create
    @product  = Product.create(title: product_params[:title], describe: product_params[:describe], image: product_params[:image], user_id: current_user.id)
    redirect_to products_path
  end

  def destroy
    products = Product.find(params[:id])
    if products.destroy
       redirect_to users_path
    else
      render :show
    end
  end

  private
  def product_params
    params.require(:product).permit(:title, :describe, :image).merge(user_id: current_user.id)
  end

  def move_to_index
    redirect_to :action => "index" unless user_signed_in?
  end
end
