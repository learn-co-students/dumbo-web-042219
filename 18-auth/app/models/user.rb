class User < ApplicationRecord

  validates_uniqueness_of :username


  # def password=(password)
  #   self.password_digest = BCrypt::Password.create(password)
  # end

  # def authenticate(password)
  #   BCrypt::Password.new(self.password_digest) == password
  # end

  has_secure_password

  has_many :votes 
  
  def remaining_votes
    5 - self.votes.count
  end

end
