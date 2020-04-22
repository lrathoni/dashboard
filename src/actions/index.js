import axios from 'axios'
import { h } from 'hyperapp'

export default{

    dataLoading: (event) => state => {
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
        return {...state, Director : state.Director}
    },
    display: (event) => (state, actions) => {
        actions.dataLoading(event)
>>>>>>> bf21c617fa4f32a1ce11bb8107b6837890a4834f
    }
}
