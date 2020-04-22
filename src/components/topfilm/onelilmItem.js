import { h } from 'hyperapp'
import getGenre from '../../actions/topfilmActions/getGenre.js'

export default (actions, props) => {
    h('div', {}, [
        h('span', {id : props.id}, [
            'title : ' + props.title,
            getGenre(props),
            'year : ' + props.year,
            'vote : ' + props.vote
        ])
    ])
}
