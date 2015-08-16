class RemoveLengthFromSkein < ActiveRecord::Migration
  def change
    remove_column :skeins, :length, :integer
  end
end
