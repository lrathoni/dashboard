import { h } from 'hyperapp'

export default (state, actions) => h('select', {onchange :(e)=>actions.onInputChange(e)}, [
    state.directorsList
        .map(item => h('option', {}, item.name))
])
