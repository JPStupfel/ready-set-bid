class Bid < ApplicationRecord
    belongs_to :professional
    belongs_to :proposal

    def professional_name
     self.professional.username
    end

    def professional_image
        self.professional.image_url
    end
    
    
end
