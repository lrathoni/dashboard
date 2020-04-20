import { h } from 'hyperapp'

import CreateChoices from '../CreateChoices'

export default (state) => {
  //console.log(state.directorsList)
  return h('select', {}, [
  	state.directorsList
  	 .map(item => h('option',{}, item.name))
  ])
}
