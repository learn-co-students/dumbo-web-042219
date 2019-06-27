class Vote < ApplicationRecord
  belongs_to :color
  belongs_to :user
end
