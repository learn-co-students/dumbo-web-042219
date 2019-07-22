class Otter < ApplicationRecord
  has_many :likes, foreign_key: "liking_otter_id"
  has_many :liked_otters, through: :likes, class_name: "Otter"

  has_many :likings, foreign_key: "liked_otter_id", class_name: "Like"
  has_many :liking_otters, through: :likings, class_name: "Otter"

  has_many :sent_messages, class_name: "Message", foreign_key: "from_otter_id"
  has_many :received_messages, class_name: "Message", foreign_key: "to_otter_id"

  has_secure_password

  validates :email, uniqueness: { case_sensitive: false }

  def is_matched?(otter)
    Like.is_matched? self, otter
  end

  def matched_otters
    self.liked_otters.select do |otter|
      otter.is_matched?(self)
    end
  end

  def send_message(otter, text)
    return nil if !Like.is_matched?(self, otter)

    Message.create(
      to_otter: otter,
      from_otter: self,
      text: text
    )
  end

  def messages_with(otter)
    Message.message_chain(self, otter)
  end
end
