class Student < ApplicationRecord
  belongs_to :teacher
  validates :age, presence: true, numericality: true
  validates :name, presence: true, length: {in: 1..50}
  validate :is_not_named_kevin

  def is_not_named_kevin
    if name && name.downcase == "kevin"
      errors.add(:name, 'No one shall ever be named "Kevin" as a student.......')
    end
  end
end
