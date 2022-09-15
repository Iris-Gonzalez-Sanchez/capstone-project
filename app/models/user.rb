class User < ApplicationRecord
    has_many :user_stocks
    has_many :stock_items, through: :user_stocks


    validates :username, uniqueness: true, presence: true
    validates :password, length: {in: 6..20}
    has_secure_password

   
    # makes these methods available to use
    # password=
    # password_confirmation=
    # authenticate
end
