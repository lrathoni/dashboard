import { h } from 'hyperapp'

// basic componant with props
export default (props) =>
    h('div', {id: 'fiche_technique"'}, [
        h('h2', {}, 'Fiche technique'),
        h('p', {}, 'Name: ' + props.name),
        h('p', {}, 'Birthday: ' + props.birthday),
        h('p', {}, 'Biography: ' + props.bio)
    ])
