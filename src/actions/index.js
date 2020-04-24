import axios from 'axios'

export default{
    dataLoading: (event) => (state, actions) => {
        state.Director.name = event.target.value
        state.Director.id  = state.directorsList.filter(item =>item.name === state.Director.name)[0].id
        axios.get('https://api.themoviedb.org/3/person/' + state.Director.id + '?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820&language=en-US').then(response =>{
            state.Director.bio = response.data.biography
            state.Director.birthday = response.data.birthday
        })
        axios.get('https://api.themoviedb.org/3/search/person?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820&language=en-US&query=' + state.Director.name + '&page=1&include_adult=false').then(response =>{
            response.data.results.filter(item =>item.known_for_department === 'Directing').map(item => item.known_for)
            const films = response.data.results.filter(item =>item.known_for_department === 'Directing').map(item => item.known_for)
            state.Director.films = []
            films.map(item => {
                item.map(film=>{
                    const filmGenre = []
                    film.genre_ids.map(idGenre => {
                        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820&language=en-US').then(response =>{
                            filmGenre.push(response.data.genres.filter(item => item.id === idGenre)[0].name)
                        })
                    })
                    const Film =  {
                        id:film.id,
                        title:film.title,
                        genre:filmGenre,
                        year:new Date(film.release_date).getFullYear(),
                        vote:film.vote_average
                    }
                    state.Director.films.push(Film)
                })
            })
        })
        actions.sort(state.Director.films)
        state.dataYear = actions.getDataYear(state.Director.films)
        return {...state, Director : state.Director, dataYear: state.dataYear}
    },
    getDataGenre:() => {

    },

    getDataYear: (props) => ({
        labels: ['1960', '1970', '1980', '1990', '2000', '2010', '2020'],
        data: { title: props.map(item => item.title), year: props.map(item => item.year)},
        title: 'Distibution by years',
        width: 600,
        height: 400
    }),

    display:(event) => (state, actions)=>{
        actions.dataLoading(event)
        actions.getDataGenre()
        return {...state, Director : state.Director}
    },

    sort: (props) => {
        const byVote = (a, b) => b.vote - a.vote
        props.sort(byVote)
    }
}
