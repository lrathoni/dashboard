import { app } from 'hyperapp'
import { withLogger } from '@hyperapp/logger'

import actions from './actions/index.js'
import state from './state/index.js'
import view from './components/view/view.js'

import './styles/main.css'

withLogger(app)(
    state,
    actions,
    view,
    document.body
)
