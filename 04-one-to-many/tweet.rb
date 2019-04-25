class Tweet

  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def inspect
    "#<Tweet message: #{ self.message } #{ self.user.username }>"
  end

  # def self.delete_last_tweet_by(user)

  # end

  def self.all
    @@all
  end


end


