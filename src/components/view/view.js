import { h } from 'hyperapp'

import info from '../dirInfo.js'
import filmSort from '../filmSort.js'
import genre from '../GenreDistribution.js'
import year from '../YearDistribution.js'

export default (state, actions) => h('div', {class: 'app'}, [
    h('div',{id: 'menu'},[
        h('h1', {class:'title', oncreate:e=>actions.constructGenre()}, 'Director dashboard'),
        h('label', {}, 'Choose a director : ', []),
        h('select', {class:'selectDir', id:'select'}, [
            h('option', {value : '', disabled: true, selected: true}, 'Director'),
            state.directorsList
                .map(item => h('option', {value: item.name}, item.name))
        ]),
        h('button', {onclick :(e)=>actions.dataLoading(e)}, 'Submit'),
    ]),
    
    info(state.Director),
    filmSort(state.Director.films),
    genre({
        abels: state.Director.genreSort.map(item=>item.name),
        data: state.Director.genreSort.map(item=>item.count),
        title: 'Sort by genres',
        registerChart: actions.registerChart
    }),
    year({
        datasets: state.Director.datasets,
        registerChart2: actions.registerChart2
    })
])


