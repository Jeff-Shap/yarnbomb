class AddNumOfSkeinsToYarn < ActiveRecord::Migration
  def change
    add_column :yarns, :num_of_skeins, :integer
  end
end
