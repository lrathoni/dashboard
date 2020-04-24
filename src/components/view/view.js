import { h } from 'hyperapp'

import info from '../dirInfo.js'
import filmSort from '../filmSort.js'
import genre from '../GenreDistribution.js'
import year from '../YearDistribution.js'

export default (state, actions) => h('div', {class: 'app'}, [
    h('h1', {class:'title'}, 'Director dashboard'),
    h('label', {}, 'Choose a director : ', []),
    h('select', {class:'selectDir', onchange :(e)=> actions.display(e)}, [
        h('option', {value : '', disabled : true, selected: true}, 'Director'),
        state.directorsList
            .map(item => h('option', {value: item.name}, item.name))
    ]),
    info(state.Director),
    filmSort(state.Director.films),
    genre({
        labels: ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science-Fiction', 'Thriller', 'War', 'Western'],
        data: [0, 1, 2],
        title: 'Distribution by genres',
        width: 800,
        height: 400
    }),
    year(state.dataYear)
    // year({
    //     labels: ['1960', '1970', '1980', '1990', '2000', '2010', '2020'],
    //     data: [{title: 'Frozen', year: 2013, vote: 10}, {title: 'Frozen2', year: 2019, vote: 10}],
    //     title: 'Distibution by years',
    //     width: 600,
    //     height: 400
    // })
])


