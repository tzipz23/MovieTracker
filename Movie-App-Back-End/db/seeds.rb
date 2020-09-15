# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.destroy_all
Actor.destroy_all
MovieActor.destroy_all

spacejam = Movie.create(title: "Space Jam", description: "Basketball movie with monsters.", director: "Joe Pytka", year: "1996", genre: "Comedy", favorite: false, trailer: "https://www.youtube.com/embed/oKNy-MWjkcU", image: "https://tvguide1.cbsistatic.com/feed/1/254/115737254.jpg")
rttitans = Movie.create(title: "Remember the Titans", description: "High school football movie.", director: "Boaz Yakin", year: "2000", genre: "Drama", favorite: false, trailer: "https://www.youtube.com/embed/nPhu9XsRl4M", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Remember_the_titansposter.jpg/220px-Remember_the_titansposter.jpg")
fgump = Movie.create(title: "Forrest Gump", description: "Eventful life of a disadvantaged man.", director: "Robert Zemeckis", year: "1994", genre: "Drama", favorite: false, trailer: "https://www.youtube.com/embed/bLvqoHBptjg", image: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg")
ssr = Movie.create(title: "The Shawshank Redemption", description: "Man breaks out of prison.", director: "Frank Darabont", year: "1994", genre: "Drama", favorite: false, trailer: "https://www.youtube.com/embed/6hB3S9bIaco", image: "https://images-na.ssl-images-amazon.com/images/I/51zUbui%2BgbL._SY445_.jpg")
matrix = Movie.create(title: "The Matrix", description: "A man fights for the truth against secret agents for the truth, set in a futuristic world.", director: "Lana & Lilly Wachowski", year: "1999", genre: "Sci-fi", favorite: false, trailer: "https://www.youtube.com/embed/vKQi3bBA1y8", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg")
pf = Movie.create(title: "Pulp Fiction", description: "Two hitmen find themselves wrapped up in a caotic adventure after events go awry.", director: "Quentin Tarantino", year: "1994", genre: "Comedy", favorite: false, trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY", image: "https://resizing.flixster.com/DeCiQlPBEaNbmp6Z-RH6-Y2GA0I=/206x305/v1.bTsxMTE3NjEwNTtqOzE4NTM0OzEyMDA7ODAwOzEyMDA")
id = Movie.create(title: "Independence Day", description: "The world must defend itself from an alien invasion.", director: "Roland Emmerich", year: "1996", genre: "Sci-fi", favorite: false, trailer: "https://www.youtube.com/embed/kA2WzBi2grE", image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Independence_day_movieposter.jpg/220px-Independence_day_movieposter.jpg")
spr = Movie.create(title: "Saving Private Ryan", description: "An American World War 2 captain takes his men behind enemy lones to rescue a soldier who's brothers have been killed in the war.", director: "Steven Spielberg", year: "1998", genre: "Drama", favorite: false, trailer: "https://www.youtube.com/embed/RYID71hYHzg", image: "https://i.pinimg.com/originals/4b/6b/a2/4b6ba283d27312d2740e218917ee9ffc.jpg")

mj = Actor.create(name: "Michael Jordan")
dw = Actor.create(name: "Denzel Washington")
th = Actor.create(name: "Tom Hanks")
tr = Actor.create(name: "Tim Robbins")
kr = Actor.create(name: "Keanu Reeves")
jt = Actor.create(name: "John Travolta")
ws = Actor.create(name: "Will Smith")
md = Actor.create(name: "Matt Damon")
ws = Actor.create(name: "Eddie Murphy")
ld = Actor.create(name: "Leonardo DiCaprio")
bp = Actor.create(name: "Brad Pitt")

mj_spacejam = MovieActor.create(movie: spacejam, actor: mj)
dw_rttitans = MovieActor.create(movie: rttitans, actor: dw)
th_fgump = MovieActor.create(movie: fgump, actor: th)
mf_ssr = MovieActor.create(movie: ssr, actor: tr)
kr_matrix = MovieActor.create(movie: matrix, actor: kr)
jt_pf_ssr = MovieActor.create(movie: pf, actor: jt)
ws_id = MovieActor.create(movie: id, actor: ws)
th_spr = MovieActor.create(movie: spr, actor: th)