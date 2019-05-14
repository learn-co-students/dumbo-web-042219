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

Student.destroy_all

students.each do |student_name|
    Student.create(
        name: student_name,
        favorite_band: "Nickelback",
        favorite_movie: "The Room",
        age: 15
    )
end
