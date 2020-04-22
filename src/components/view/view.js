import { h } from 'hyperapp'

import info from '../DirInfo.js'


export default (state, actions) => h('div', {class: 'app'},[
	h('h1',{class:'title'},'Director dashboard'),
	h('label',{},'Choose a director : ',[]),
	h('select', {class:'selectDir', onchange :(e)=>actions.dataLoading(e)}, [
    	state.directorsList
        	.map(item => h('option', {}, item.name))
	]),
	info({ 
		name: state.Director.name,birthday : state.Director.birthday, biography : state.Director.biography
	})
	//info({name: 'coucou'}),
])


