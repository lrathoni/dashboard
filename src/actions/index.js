import axios from 'axios'

export default{
    dataLoading: ()=> (state, actions) => {
        state.Director.genreSort.map(item=>item.count = 0)
        const select = document.querySelector('#select')
        const choice = select.selectedIndex
        const value = select.options[choice].value
        state.Director.id  = state.directorsList.filter(item =>item.name === value)[0].id
        axios.get('https://api.themoviedb.org/3/person/' + state.Director.id + '?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820&language=en-US').then(response =>{
            actions.modifDirector(response)
        })
        axios.get('https://api.themoviedb.org/3/search/person?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820&language=en-US&query=' + value + '&page=1&include_adult=false').then(response =>{
            const films = response.data.results.filter(item =>item.known_for_department === 'Directing').map(item => item.known_for)
            state.Director.films = []
            films.map(item => {
                item.map(film=>{
                    actions.modifFilm(film)
                })
            })
            setTimeout(()=>actions.updateChart(state.Director.genreSort), 100)
        })
        return {...state, Director : state.Director}
    },
    modifDirector:(response) => (state)=>{
        state.Director.bio = response.data.biography
        state.Director.birthday = response.data.birthday
        state.Director.name = response.data.name
        console.log(state.Director)
        return state
    },
    constructGenre:()=>(state)=>{
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820&language=en-US').then(response2 =>{
            response2.data.genres.map(item=> {
                const genre = {
                    name: item.name,
                    count: 0
                }
                state.Director.genreSort.push(genre)
            })
        })
        return {...state, Director : state.Director}
    },
    genre:(item)=>(state)=>{
        state.Director.genreSort.map(item2 =>{
            if(item.name === item2.name){
                item2.count++
            }
        })
        return {...state, Director : state.Director}
    },
    modifFilm:(film)=>(state, actions)=>{
        const byVote = (a, b) => b.vote - a.vote
        film.genre_ids.map(idGenre => {
            axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820&language=en-US').then(response2 =>{
                response2.data.genres.map(item => {
                    if(item.id === idGenre){
                        actions.genre(item)
                    }
                })
            })
        })
        const Film =  {
            id:film.id,
            title:film.title,
            year:new Date(film.release_date).getFullYear(),
            vote:film.vote_average
        }
        state.Director.films.push(Film)
        state.Director.films.sort(byVote)
        return {...state, Director : state.Director}
    },
    registerChart:(chart)=>(state)=>{
        return {...state, Chart : chart}
    },
    updateChart:(list)=>(state)=>{
        state.Chart.data.labels = list.map(item=>item.name)
        state.Chart.data.datasets[0].data = list.map(item=>item.count)
        state.Chart.update({duration: 800})
    }
}
