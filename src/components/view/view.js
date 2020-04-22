import { h } from 'hyperapp'

import Info from '../DirInfo.js'
import Genre from '../GenreDistribution.js'


export default (state, actions) => h('div', {class: 'app'},[
	h('h1',{class:'title'},'Director dashboard'),
	h('label',{},'Choose a director : ',[]),
	h('select', {class:'selectDir', onchange :(e)=>actions.dataLoading(e)}, [
    	state.directorsList
        	.map(item => h('option', {}, item.name))
	]),
	Info({ 
		name: state.Director.name,birthday : state.Director.birthday, biography : state.Director.bio
	}),
	Genre({
        labels: ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science-Fiction', 'Thriller', 'War', 'Western'],
        data: [135850, 52122, 148825, 16939, 9763], //actions.getData()
        title: 'Distribution by genres',
        width: 800,
        height: 400
	})
])


