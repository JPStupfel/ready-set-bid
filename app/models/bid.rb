class Bid < ApplicationRecord
    belongs_to :professional
    belongs_to :proposal

    validates :amount, numericality: { only_integer: true }

    def professional_name
     self.professional.username
    end

    def professional_image
        self.professional.image_url
    end
    
    
end
