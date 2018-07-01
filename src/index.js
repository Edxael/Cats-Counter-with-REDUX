import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/00-main'
import './style.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './03-reducers/index'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={ store }>
        <Main/>
    </Provider>, 
    document.getElementById('root'))