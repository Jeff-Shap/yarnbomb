class Yarn < ActiveRecord::Base
  belongs_to :user
  has_many :skeins
  has_many :projects
end
