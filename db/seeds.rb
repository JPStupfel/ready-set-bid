require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# t.string "title"
# t.string "description"
# t.integer "client_id"
# t.integer "victor_id"
# t.datetime "created_at", precision: 6, null: false
# t.datetime "updated_at", precision: 6, null: false
# t.float "lat"
# t.float "lng"
# lat: 41.3917,
# lng: 2.1649

Client.create username: 'liv', password: 'fish', password_confirmation: 'fish', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTWFnjwIJFXgDdyzgSRjit2_9zlWrMVqgVg&usqp=CAU'

Professional.create username: 'arnold', password: 'fish', password_confirmation: 'fish', image_url: 'https://manofmany.com/wp-content/uploads/2019/03/Arnold-Schwarzeneggers-Diet-and-Workout-Plan.jpg'


3.times do 
    Proposal.create title: Faker::Science.element_subcategory, description: Faker::Quote.yoda, client_id: Client.first.id, victor_id: nil, lat: Faker::Number.within(range: 41.3917..41.4000), lng: Faker::Number.within(range: 2.1649..3.0000) 
end