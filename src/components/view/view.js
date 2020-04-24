import { h } from 'hyperapp'

import info from '../dirInfo.js'
import filmSort from '../filmSort.js'
import genre from '../GenreDistribution.js'
import year from '../YearDistribution.js'

export default (state, actions) => h('div', {class: 'app'}, [
    h('h1', {class:'title', oncreate:e=>actions.constructGenre()}, 'Director dashboard'),
    h('label', {}, 'Choose a director : ', []),
    h('select', {class:'selectDir', id:'select'}, [
        h('option', {value : '', disabled: true, selected: true}, 'Director'),
        state.directorsList
            .map(item => h('option', {value: item.name}, item.name))
    ]),
    h('button', {onclick :e=>actions.dataLoading(e)}, 'Submit'),
    info(state.Director),
    genre({
        abels: state.Director.genreSort.map(item=>item.name),
        data: state.Director.genreSort.map(item=>item.count),
        title: 'Sort by genres',
        registerChart: actions.registerChart
    }),
    // year(state.dataYear)
    year({
        label: ['1960\'s', '1970\'s', '1980\'s', '1990\'s', '2000\'s', '2010\'s', '2020\'s'],
        datasets: [{label : 'Frozen2 2019', data: [0, 0, 0, 0, 0, 8.3, 0], backgroundColor: ['blue', 'green', 'red', 'yellow', 'purple', 'pink']}],
        title: 'Distibution by years',
        width: 600,
        height: 400
    })
])


