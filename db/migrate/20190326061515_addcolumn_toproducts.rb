class AddcolumnToproducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :title, :string
    add_column :products, :describe, :string
    add_column :products, :image, :string
  end
end
