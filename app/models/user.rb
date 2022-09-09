class User < ApplicationRecord

    validates :username, uniqueness: true
    has_secure_password
    # makes these methods available to use
    # password=
    # password_confirmation=
    # authenticate
end