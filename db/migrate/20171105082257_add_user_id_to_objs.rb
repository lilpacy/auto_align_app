class AddUserIdToObjs < ActiveRecord::Migration[5.0]
  def change
    add_column :objs, :user_id, :integer
  end
end
