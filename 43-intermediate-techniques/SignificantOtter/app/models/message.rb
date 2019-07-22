class Message < ApplicationRecord
  belongs_to :to_otter, class_name: "Otter"
  belongs_to :from_otter, class_name: "Otter"

  def self.message_chain(*to_or_from)
    self.where(
      from_otter: to_or_from,
      to_otter: to_or_from
    ).order(:created_at)
  end
end
