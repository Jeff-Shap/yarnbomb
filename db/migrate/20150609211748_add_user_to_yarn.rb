class AddUserToYarn < ActiveRecord::Migration
  def change
    add_reference :yarns, :user, index: true, foreign_key: true
  end
end
