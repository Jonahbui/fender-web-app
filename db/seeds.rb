# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

erb_locations = [
  "100",
  "101",
  "102",
  "103",
  "104",
  "105A",
  "105B",
  "106",
  "107",
  "120",
  "122",
  "123",
  "124A",
  "124B",
  "125A",
  "125B",
  "126A",
  "126B",
  "127A",
  "127B",
  "128",
  "129A",
  "129B",
  "130A",
  "130B",
  "131A",
  "131B",
  "132A",
  "132B",
  "181",
  "182",
  "183",
  "184",
  "185",
  "186",
  "187",
  "188",
  "189",
  "201",
  "202",
  "203",
  "204",
  "205",
  "206",
  "207",
  "208X",
  "208Y",
  "220A",
  "220B",
  "225",
  "226",
  "228A",
  "228B",
  "244",
  "273A",
  "273B",
  "276",
  "277",
  "278",
  "279A",
  "279B",
  "280A",
  "280B",
  "281",
  "282",
  "283",
  "301",
  "312",
  "313A",
  "313B",
  "315",
  "316",
  "335A",
  "335B",
  "335C",
  "370",
  "373A",
  "373B",
  "374A",
  "374B",
  "376A",
  "376B",
  "377A",
  "377B",
  "378",
  "379A",
  "379B",
  "380A",
  "380B",
  "382A",
  "382B",
  "401",
  "412",
  "413A",
  "413B",
  "414A",
  "414B",
  "435A",
  "435B",
  "470",
  "473",
  "474A",
  "474B",
  "475",
  "476A",
  "476B",
  "479",
  "480",
  "481",
  "482",
  "483A",
  "483B",
  "501",
  "512",
  "513A",
  "513B",
  "514A",
  "514B",
  "562",
  "570A",
  "570B",
  "5C3",
  "5C4",
  "640AA",
  "640AB",
  "670A",
  "670B",
  "6C2",
  "6C4"
]

erb_locations.each do |location|
  Location.create(name: "ERB #{location}", floor: location[0].to_i)
end

User.create(email: "fender@uta.edu", password: "password")