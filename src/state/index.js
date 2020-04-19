export default {
  // Example
  // https://api.themoviedb.org/3/movie/550?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820
  movieItems: [
    {
      title: 'Frozen', // <=>  title or original_title
      genres: 'comedy', // <=> genres //Sort by categories
      populatiry: 0, // <=> popularity or vote_count => Make top films/serie
      countries: '', // <=> production_countries
      id: 'fe2498a3', // <=> id
      release_date: '2020-02-29T19:20+01:00' // <=> released_date
    },
    {
      done: false,
      text: 'do stuff',
      id: '98a3fe24',
      createdAt: '2020-02-29T21:35+01:00'
    }
  ],
  addMovieItemInput: '',

  // Example
  // https://api.themoviedb.org/3/tv/550?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820
  tvItems: {
    title: 'friends', // <=>  title or original_title
    genres: 'comedy', // <=> genres //Sort by categories
    populatiry: 0, // <=> popularity or vote_count => Make top films/serie
    countries: "", // <=> origin_country WARNING just initial (England = 'en')
    id: 'fe2498a3', // <=> Not id
    release_date: '2020-02-29T19:20+01:00' // <=> released_date
  },
  addTvItems: ''
}
