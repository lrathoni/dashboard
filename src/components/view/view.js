import { h } from 'hyperapp'

export default (state, actions) => h('select', {onchange: actions.display}, [
    state.directorsList
        .map(item => h('option', {}, item.name))
])
