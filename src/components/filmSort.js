import { h } from 'hyperapp'

export default (props) => {
    return h('div', {id : 'top_film'}, [
        h('h2', {id:'topfilm'}, 'Top Films'),
        props.map(item => h('p', {class : 'film'}, item.title + '   ' + item.vote + '/10 ' + 'year ' + item.year))
    ])
}

