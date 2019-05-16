band_names = [
  "Arcade Fire",
  "Wilco",
  "Sleater-Kinney",
  "Pavement",
  "Yo La Tengo",
  "Destroyer",
  "The National",
  "Parquet Courts",
  "Vampire Weekend",
  "The Dismemberment Plan",
  "Silver Jews",
  "Spoon",
  "Car Seat Headrest",
  "Brand New",
  "Low",
  "Sunset Rubdown",
  "Les Savy Fav",
  "Super Furry Animals",
  "Superchunk",
  "Deerhunter",
  "Cymbals Eat Guitars",
  "The Phantom Band",
  "Modest Mouse",
  "The Fiery Furnaces",
  "The Hold Steady",
  "Grandaddy"
]

students = [
  "Sebastien	Sanz de Santamaria",
  "John	Hill",
  "Aaron Chu",
  "Andrew	Koenig-Bautista",
  "Miles Marillo",
  "Chloe Liu",
  "Adityo	Sagir",
  "Wei Feng",
  "Loune Calixte",
  "Michael McGovern"
]


Band.destroy_all
Student.destroy_all

band_names.each do |band_name|
  Band.create(name: band_name)
end

students.each do |student_name|
    Student.create(
        name: student_name,
        favorite_movie: "The Room",
        age: 15,
        band_id: Band.all.sample.id
    )
end
