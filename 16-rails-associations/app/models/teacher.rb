class Teacher < ApplicationRecord
  has_many :exams
  has_many :students, through: :exams
end
