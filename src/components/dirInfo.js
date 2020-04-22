import { h } from 'hyperapp'

// basic componant with props
export default (props) =>
    h('div', {}, [
    	h('h2',{},'Name :'+props.name),
    	h('p',{},'Birthday :' +props.birthday),
    	h('p',{},'Biography :' +props.biography)
    ])	