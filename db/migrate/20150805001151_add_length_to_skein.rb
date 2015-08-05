class AddLengthToSkein < ActiveRecord::Migration
  def change
    add_column :skeins, :length, :integer
  end
end
