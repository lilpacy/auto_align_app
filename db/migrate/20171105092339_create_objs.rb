class CreateObjs < ActiveRecord::Migration[5.0]
  def change
    create_table :objs do |t|
      t.string :title
      t.integer :influence
      t.integer :time
      t.datetime :deadline
      t.timestamps
    end
  end
end
