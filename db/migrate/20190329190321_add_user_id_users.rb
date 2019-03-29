class AddUserIdUsers < ActiveRecord::Migration[5.2]
  def change
    add_reference :products, :user, foregin_key: true
  end
end
