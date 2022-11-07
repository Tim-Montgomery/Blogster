# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding database..."
User.destroy_all

user_1 = User.create(first_name: "Tim", last_name: "Montgomery", username: "Tim", email: "timtest@gmail.com", password: "123")

puts "Seeding complete!"