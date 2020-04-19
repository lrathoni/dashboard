export default {
    // Example
    // https://api.themoviedb.org/3/movie/550?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820
    movieItems: [
        {
            title: 'Fight Club', // <=>  title or original_title
            genres: 'Drama', // <=> genres //Sort by categories
            populatiry: 41.719, // <=> popularity or vote_count => Make top films/serie
            countries: ['Germany', 'United States of America'], // <=> production_countries
            id: '550', // <=> id
            release_date: '1999-10-15' // <=> released_date
        },
        {
            title: 'The Poseidon Adventure Collection',
            genres: ['Action', 'Adventure', 'Drama'],
            populatiry: 9.715,
            countries: ['United States of America'],
            id: '551',
            release_date: '1972-12-13'
        }
    ],
    addMovieItemInput: '',

    // Example
    // https://api.themoviedb.org/3/tv/550?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820
    tvItems: {
        title: 'Top Gear', // <=>  title or original_title
        genres: 'Documentary', // <=> genres //Sort by categories
        populatiry: 29.6, // <=> popularity or vote_count => Make top films/serie
        countries: 'GB', // <=> origin_country WARNING just initial (England = 'en')
        id: '45', // <=> Not id
        release_date: '2002-10-20' // <=> first_air_date
    },
    addTvItems: ''
}
