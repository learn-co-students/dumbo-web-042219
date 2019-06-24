class PoopController < ApplicationController

  skip_before_action :verify_authenticity_token, only: [:create]

  def index

  end

  def create
    ActionCable.server.broadcast('poop_channel', {
      important: "💩",
      comments: [
        "This was great",
        "Meh",
        "Whatever"
      ]
    })
    render json: { ok: true }
  end

end
