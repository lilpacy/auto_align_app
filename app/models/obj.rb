class Obj < ApplicationRecord
  validates :title, :influence, :time, presence: true
  belongs_to :user
end
