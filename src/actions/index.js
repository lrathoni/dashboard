import axios from 'axios'

export default{
    dataLoading: ()=> (state, actions) => {
        state.Director.genreSort.map(item=>item.count = 0)
        const select = document.querySelector('#select')
        const choice = select.selectedIndex
        const value = select.options[choice].value
        if (state.Director.name !== value) {
            state.Director.id  = state.directorsList.filter(item =>item.name === value)[0].id
            axios.get('https://api.themoviedb.org/3/person/' + state.Director.id + '?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820&language=en-US').then(response =>{
                actions.modifDirector(response)
            })
            axios.get('https://api.themoviedb.org/3/search/person?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820&language=en-US&query=' + value + '&page=1&include_adult=false').then(response =>{
                const films = response.data.results.filter(item =>item.known_for_department === 'Directing').map(item => item.known_for)
                state.Director.films = []
                state.Director.datasets = []
                films.map(item => {
                    item.map(film=>{
                        actions.modifFilm(film)
                    })
                })
                setTimeout(()=>actions.updateChart(state.Director.genreSort), 100)
                setTimeout(()=>actions.updateChart2(state.Director), 100)
            })
        }
        return {...state, Director : state.Director}
    },

    getDataset: () => (actions, state) => {
        return state.Director.films.map(item => (
            {
                label : item.title + ' ' + item.year,
                data: actions.getDatabyYearPosition(item),
                backgroundColor: 'blue'
            }
        ))
    },

    getDatabyYearPosition : (propsItem) => {
        if (isNaN(propsItem.year))
            return [0, 0, 0, 0, 0, 0, 0, propsItem.vote]
        else {
            const arrayVote = [0, 0, 0, 0, 0, 0, 0]
            const arrayYear = [1960, 1970, 1980, 1990, 2000, 2010, 2020, propsItem.year]
            console.log('avant tri : ', arrayYear)
            const byYear = (a, b) => a - b
            arrayYear.sort(byYear)
            console.log('après tri : ', arrayYear)
            const indexVote = arrayYear.indexOf(propsItem.year)
            console.log('index : ', indexVote)
            arrayVote[indexVote - 1] = propsItem.vote
            return arrayVote
        }
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
        state.Director.datasets.push({label : Film.title + ' ' + Film.year, data: actions.getDatabyYearPosition(Film), backgroundColor: 'blue'})
        return {...state, Director : state.Director}
    },
    registerChart:(chart)=>(state)=>{
        return {...state, Chart : chart}
    },

    registerChart2:(chart2)=>(state)=>{
        return {...state, Chart2 : chart2}
    },

    updateChart:(list)=>(state)=>{
        state.Chart.data.labels = list.map(item=>item.name)
        state.Chart.data.datasets[0].data = list.map(item=>item.count)
        state.Chart.update({duration: 800})
    },

    updateChart2:()=>(state)=>{
        state.Chart2.data.datasets = state.Director.datasets
        state.Chart2.update({duration: 800})
    }
}
