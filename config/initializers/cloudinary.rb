Cloudinary.config do |config|
  config.cloud_name = Rails.application.credentials.cloudinary[:cloud_name]
  config.api_key = Rails.application.credentials.cloudinary[:api_key]
  config.api_secret = Rails.application.credentials.cloudinary[:api_secret]
  config.enhance_image_tag = true
  config.static_file_support = Rails.env.production?
  # config.secure = true
end
