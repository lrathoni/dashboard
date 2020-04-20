import { h } from 'hyperapp'

export default (state) => {
  console.log(state.directorsList)
  return h('select', {}, [
      h('option',{},'blabla')
  ])
}
