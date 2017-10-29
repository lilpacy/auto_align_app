class Obj < ApplicationRecord
  validates :title, :influence, :time, presence: true
end
