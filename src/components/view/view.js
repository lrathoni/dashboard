import { h } from 'hyperapp'

import info from '../dirInfo.js'
import filmSort from '../filmSort.js'
import genre from '../GenreDistribution.js'

export default (state, actions) => h('div', {class: 'app'}, [
    h('h1', {class:'title', oncreate:e=>actions.constructGenre()}, 'Director dashboard'),
    h('label', {}, 'Choose a director : ', []),
    h('select', {class:'selectDir', id:'select'}, [
        h('option', {value : '', disabled: true, selected: true}, 'Director'),
        state.directorsList
            .map(item => h('option', {value: item.name}, item.name))
    ]),
    h('button', {onclick :e=>actions.dataLoading(e)}, 'Bouton'),
    info(state.Director),
    genre({
        abels: state.Director.genreSort.map(item=>item.name),
        data: state.Director.genreSort.map(item=>item.count),
        title: 'Sort by genres',
        registerChart: actions.registerChart
    }),
    filmSort(state.Director.films),
])


