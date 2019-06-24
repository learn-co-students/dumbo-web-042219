class PoopChannel < ApplicationCable::Channel
  def subscribed
    stream_from "poop_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
