class AddProjectToYarn < ActiveRecord::Migration
  def change
    add_reference :yarns, :project, index: true, foreign_key: true
  end
end
