class Exam < ApplicationRecord
  belongs_to :teacher
  belongs_to :student
  validates_inclusion_of :grade, in: (0..100)
end
