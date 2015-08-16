class AddLengthToSkein < ActiveRecord::Migration
  def change
    add_column :skeins, :length, :float
  end
end
