require 'sqlite3'
require 'pry'

query = "SELECT artists.name, count(tracks.id) as rock_tracks from artists
join albums on artists.id = albums.artist_id
join tracks on tracks.album_id = albums.id
where tracks.genre_id = 1
group by artists.id
having rock_tracks > 30
order by rock_tracks DESC"


db = SQLite3::Database.new('chinook.db')

db.execute(query)


binding.pry

false

