import { h } from 'hyperapp'

import info from '../dirInfo.js'
import filmSort from '../filmSort.js'
import genre from '../GenreDistribution.js'


<<<<<<< HEAD
export default (state, actions) => h('div', {class: 'app'},[
	h('h1',{class:'title'},'Director dashboard'),
	h('label',{},'Choose a director : ',[]),
	h('select', {class:'selectDir', onchange :(e)=>actions.display(e)}, [
		h('option', {value : '', disabled : true, selected: true},'Director'),
    	state.directorsList
        	.map(item => h('option', {value: item.name}, item.name))
	]),
	info(state.Director),
	genre({
        labels: ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science-Fiction', 'Thriller', 'War', 'Western'],
        data: [0,1,2],
        title: 'Distribution by genres',
        width: 800,
        height: 400
    }),
    filmSort(state.Director.films),
])


