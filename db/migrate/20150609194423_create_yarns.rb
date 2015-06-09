class CreateYarns < ActiveRecord::Migration
  def change
    create_table :yarns do |t|
      t.string :name
      t.string :color
      t.string :weight
      t.float :gauge

      t.timestamps null: false
    end
  end
end
