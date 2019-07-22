# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Otter.destroy_all
Like.destroy_all
Message.destroy_all


otter_types = [
  "Giant otter",
  "North American river otter",
  "Marine otter",
  "Southern river otter",
  "Neotropical river otter",
  "Sea otter",
  "Spotted-necked otter",
  "Eurasian otter",
  "Hairy-nosed otter",
  "Japanese otter",
  "African clawless otter",
  "Asian small-clawed otter",
  "Smooth-coated otter"
]

(1..100).each do |i|
  name = Faker::FunnyName.name
  interests = [
    Faker::Marketing.buzzwords,
    "#{otter_types.sample} from #{Faker::Address.country}.",
    Faker::Quote.matz,
    Faker::Quote.famous_last_words
  ]

  Otter.create(
    name: name,
    email: Faker::Internet.email(name),
    password: name,
    interests: interests.sample(3).join(" ")
  )
end

(1..500).each do |i|
  first_otter = Otter.all.sample
  second_otter = Otter.all.sample

  if (first_otter != second_otter) && !first_otter.liked_otters.include?(second_otter)
    first_otter.liked_otters << second_otter
  end

  if (srand % 5 == 0)
    second_otter.liked_otters << first_otter
  end
end

Otter.first.liked_otters << Otter.second
Otter.second.liked_otters << Otter.first

(1..500).each do |i|
  otter = Otter.all.sample
  otter.send_message(otter.matched_otters.sample, Faker::Movies::HarryPotter.quote)
end

Otter.first.send_message(Otter.second, Faker::Movies::HarryPotter.quote)
Otter.second.send_message(Otter.first, Faker::Movies::HarryPotter.quote)
