class Like < ApplicationRecord
  belongs_to :liking_otter, class_name: "Otter"
  belongs_to :liked_otter, class_name: "Otter"

  def self.is_matched?(curious_otter, other_otter)
    curious_otter_likes = !!self.find_by(
      liking_otter: curious_otter,
      liked_otter: other_otter
    )
    return false if !curious_otter_likes

    other_otter_likes = !!self.find_by(
      liking_otter: other_otter,
      liked_otter: curious_otter
    )
    return false if !other_otter_likes

    return true
  end
end
