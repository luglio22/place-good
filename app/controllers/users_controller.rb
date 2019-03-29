class UsersController < ApplicationController

  def index
    @user = User.new
    @users = current_user
  end
end
