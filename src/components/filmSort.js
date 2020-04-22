import { h } from 'hyperapp'
import sortbyVote from '../actions/sortbyVote.js'

export default () => state => {
    sortbyVote(state.Director.films)
    console.log('j\'ai de la chance ou pas?'),
    console.log(state.Director.films)
    h('div', {id : 'TopVote'},
        state.Director.films.forEach( item => {
            h('h2', {class : 'film'}, item.title)
            console.log('LOOK HERE : ' + item.title)
        })
    )
}

