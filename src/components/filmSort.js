import { h } from 'hyperapp'


export default (props) => {
    return h('div', {id : 'top_film'}, [
        h('h2', {id:'topfilm'}, 'Top Films'),
        props.films.map(item =>
            h('p', {class : 'film'},
                (item.vote !== 0) ?
                    '"' + item.title + '"   ' + ' (' + item.year + ') ' + item.vote + '/10 '
                    : '"' + item.title + '"   ' + ' (' + item.year + ') ' + 'No rated'
            )
        )]
    )
}

