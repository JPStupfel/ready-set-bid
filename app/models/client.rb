class Client < ApplicationRecord
    has_many :proposals
    has_secure_password
end
