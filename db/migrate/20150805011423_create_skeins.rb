class CreateSkeins < ActiveRecord::Migration
  def change
    create_table :skeins do |t|
      t.integer :length

      t.timestamps null: false
    end
  end
end
