import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { openModal } from './reducers/index'
import { StoreState } from './types/index'

import App from './App'
import './assets/font/Roboto.css'
import './index.css'

import registerServiceWorker from './registerServiceWorker'

const store = createStore<StoreState, any, any, any>(openModal, {
  chatOpen: false,
  meetingDisabled: false,
  meetingOpen: false,
  memberAdd: false,
  memberState: 'active',
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
