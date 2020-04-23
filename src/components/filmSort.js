import { h } from 'hyperapp'

export default (props) => {
    return h('div', {id : 'TopVote'}, [
        h('h2', {id:'topfilm'}, 'Top Films'),
        props.map(item => h('p', {class : 'film'}, item.title))
    ])
}

