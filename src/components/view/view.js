import { h } from 'hyperapp'

export default (state) => h('select', {}, [
    state.directorsList
        .map(item => h('option', {}, item.name))
])
