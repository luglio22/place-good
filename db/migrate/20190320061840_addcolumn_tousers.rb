class AddcolumnTousers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :nickname, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :first_name_jp, :string
    add_column :users, :last_name_jp, :string
    add_column :users, :add_ress,:string
  end
end
