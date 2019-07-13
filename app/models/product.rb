class Product < ApplicationRecord
  mount_uploader :image, ImagesUploader
  belongs_to :user

  validates :title,:describe, presence: true
end
