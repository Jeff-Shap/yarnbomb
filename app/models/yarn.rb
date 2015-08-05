class Yarn < ActiveRecord::Base
  belongs_to :user
  has_many :skeins
  has_many :projects
  accepts_nested_attributes_for :skeins
end
