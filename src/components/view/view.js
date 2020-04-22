import { h } from 'hyperapp'

import info from '../dirInfo.js'
import filmSort from '../filmSort.js'


export default (state, actions) => h('div', {class: 'app'}, [
    h('h1', {class:'title'}, 'Director dashboard'),
    h('label', {}, 'Choose a director : ', []),
    h('select', {class:'selectDir', onchange :(e)=>actions.dataLoading(e)}, [
        state.directorsList
            .map(item => h('option', {}, item.name))
    ]),
    info(state.Director),
    filmSort()
    //info({name: 'coucou'}),
])


