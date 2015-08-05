class AddYarnToSkein < ActiveRecord::Migration
  def change
    add_reference :skeins, :yarn, index: true, foreign_key: true
  end
end
